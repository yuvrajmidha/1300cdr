import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {AgGridReact} from 'ag-grid-react';
import { Box, Flex, HStack, Text, Heading, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  useDisclosure} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { FaCalendar, FaChevronDown, FaChevronLeft, FaChevronRight, FaFileExcel, FaSearch } from 'react-icons/fa';
import { Checkbox } from '@chakra-ui/checkbox';
import { Select } from '@chakra-ui/select';
import useWindowWidth from '../../scripts/width';
;

const InRange = (props) => {
const { isOpen, onOpen, onClose } = useDisclosure()
return <>

<Box onClick={onOpen}>
  {props.children}
</Box>

<Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent>
  <ModalHeader>Enter a Range</ModalHeader>
  <ModalCloseButton />
  <ModalBody>
      <HStack spacing={4}>
          <Input type="date" w={"192px"}></Input>
          <Text>to</Text>
          <Input type="date" w={"192px"}></Input>
      </HStack>
  </ModalBody>s̄

  <ModalFooter>
    <Button colorScheme='gray' mr={3} onClick={onClose}>
      Close
    </Button>
    <Button colorScheme={"brand"} variant='solid'>Filter</Button>
  </ModalFooter>
</ModalContent>
</Modal></>}

const AgTable = forwardRef((props, ref) => {

  const width = useWindowWidth()
  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
  };

  useImperativeHandle(ref, () => ({

    exportExcel(){
        gridApi.exportDataAsExcel();
    }

  }))

  const [active, setActive] = useState(props.categories ? props.categories[0] : 0)
  
  return (
    <>
      <Flex alignItems="end" justifyContent="space-between">
          {props.categories ? <ButtonGroup spacing={0}>
              <Checkbox mx={5}></Checkbox>
              {width > (props.breakpoint || 992) ? 
                props.categories.map(category => <Button variant="ghost" onClick={() => setActive(category)} boxSizing="border-box" borderBottom={active === category && "red 2px solid"} py={7} rounded={0}>{category}</Button>) :
                <Menu>
                  <MenuButton as={Button} py={7} px={4} variant="ghost" rightIcon={<FaChevronDown />}>
                      {active}
                  </MenuButton>
                  <MenuList>
                      {props.categories.map(category => <MenuItem onClick={() => setActive(category)}>{category}</MenuItem>)}
                  </MenuList>
              </Menu>}
          </ButtonGroup> : <Heading py={3} size="md">{props.title || "List"}</Heading>}
          <HStack p={2} spacing={2}>
              {props.dateRange !== false && <Menu>
                  <MenuButton as={Button} px={8} variant="ghost" leftIcon={<FaCalendar />} rightIcon={<FaChevronDown />}>
                  Last 7 Days
                  </MenuButton>
                  <MenuList>
                      <MenuItem>Last 7 Days</MenuItem>
                      <MenuItem>Last Month</MenuItem>
                      <MenuItem>Last Year</MenuItem>
                      <MenuItem>All</MenuItem>
                      <InRange><MenuItem>In Range</MenuItem></InRange>
                  </MenuList>
              </Menu>}
              {width > (props.breakpoint || 992) && <> <InputGroup maxW="300px">
                  <InputLeftElement color="gray.300" pointerEvents="none">
                      <FaSearch></FaSearch>
                  </InputLeftElement>
                  <Input placeholder="Search"></Input>
              </InputGroup>
              {props.exportButton !== false && <Button px={7} leftIcon={<FaFileExcel></FaFileExcel>}>Export</Button>}
              </>}
          </HStack> 
      </Flex>
      <Box
        id="myGrid"
        height={`${67 + (props.rowData.length * 60)}px`}
        width="100%"
        style={{borderWidth: 0}}
        borderWidth={0}
        className={useColorModeValue("ag-theme-alpine", "ag-theme-alpine-dark")}
      >
        <AgGridReact
          rowHeight={60}
          rowSelection={props.rowSelection}
          rowData={props.rowData}
          defaultColDef={{
            flex: 1,
            minWidth: props.minWidth || 128,
            sortable: props.sortable || true,
            filter: props.filter || true
          }}
          onGridReady={onGridReady}
        >
          {props.children}
          
        </AgGridReact>
      </Box>
      <Flex px={4} justifyContent="space-between" alignItems="center" py={2}>
          <Flex alignItems="center">
              {/* <Select size="sm" maxWidth="72px">
                  <option selected>15</option>
                  <option>50</option>
                  <option>100</option>
                  <option>200</option>
                  <option>500</option>
              </Select>
              <Text mx={2} width="140px">Items per page</Text> */}
          </Flex>
          <ButtonGroup>
              <Button size="sm" variant={"outline"}><FaChevronLeft></FaChevronLeft></Button>
              <Button size="sm" variant={"outline"} rightIcon={<FaChevronRight></FaChevronRight>}>Next</Button>
          </ButtonGroup>
      </Flex>
    </>
  );
});

export default AgTable