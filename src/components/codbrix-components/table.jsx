import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {AgGridReact} from 'ag-grid-react';
import { Box, Flex, HStack, Text} from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { FaCalendar, FaChevronDown, FaChevronLeft, FaChevronRight, FaFileExcel, FaSearch } from 'react-icons/fa';
import { Checkbox } from '@chakra-ui/checkbox';
import { Select } from '@chakra-ui/select';
import useWindowWidth from '../../scripts/width';
;

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
          {props.categories && <ButtonGroup spacing={0}>
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
              </Menu>
              }
          </ButtonGroup>}
          <HStack p={2} spacing={2}>
              <Menu>
                  <MenuButton as={Button} px={6} variant="ghost" leftIcon={<FaCalendar />} rightIcon={<FaChevronDown />}>
                  Last 7 Days
                  </MenuButton>
                  <MenuList>
                      <MenuItem>Last 7 Days</MenuItem>
                      <MenuItem>Last Month</MenuItem>
                      <MenuItem>Last Year</MenuItem>
                      <MenuItem>All</MenuItem>
                      <MenuItem>In Range</MenuItem>
                  </MenuList>
              </Menu>
              {width > (props.breakpoint || 992) && <> <InputGroup maxW="300px">
                  <InputLeftElement color="gray.300" pointerEvents="none">
                      <FaSearch></FaSearch>
                  </InputLeftElement>
                  <Input placeholder="Search"></Input>
              </InputGroup>
              <Button px={7} leftIcon={<FaFileExcel></FaFileExcel>}>Export</Button>
              </>}
          </HStack> 
      </Flex>
      <Box
        id="myGrid"
        height={`calc(100vh - ${props.offsetY ? props.offsetY + 112 : 112 }px)`}
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
              
              <Select maxWidth="72px">
                  <option selected>15</option>
                  <option>50</option>
                  <option>100</option>
                  <option>200</option>
                  <option>500</option>
              </Select>
              <Text mx={2} width="140px">Items per page</Text>
          </Flex>
          <ButtonGroup>
              <Button><FaChevronLeft></FaChevronLeft></Button>
              <Button colorScheme="red" rightIcon={<FaChevronRight></FaChevronRight>}>Next</Button>
          </ButtonGroup>
      </Flex>
    </>
  );
});

export default AgTable