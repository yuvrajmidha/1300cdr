import { Button, ButtonGroup } from '@chakra-ui/button'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Flex, HStack, Text} from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { AgGridColumn } from 'ag-grid-react'
import orderData from '../../assets/data/orders.json'
import TableDate from '../../components/table-components/date';
import TableObjectRenderer from '../../components/table-components/object';
import ShipNow from '../../components/table-components/shipNow'
import React, { useState } from 'react'
import { FaCalendar, FaChevronDown, FaFileExcel, FaSearch } from 'react-icons/fa'

import AgTable from '../../components/codbrix-components/table'
import { Alert, AlertIcon } from '@chakra-ui/alert'
import { Link } from 'react-router-dom'
import { Select } from '@chakra-ui/select'
import { Checkbox } from '@chakra-ui/checkbox'

const categories = ["All", "Not Shipped","Cancelled", "Closed", "Archived"]

function Orders() {

    const [active, setActive] = useState("All")

    return (
        <Box>
            <Alert justifyContent="space-between" status="error">
                <Flex>
                    <AlertIcon />
                    Your products are not mapped with our products.
                </Flex>
                <Link to="/app/products">
                    <Button colorScheme="red">
                        Map Products
                    </Button>
                </Link>
            </Alert>
            <Flex alignItems="end" justifyContent="space-between">
                <ButtonGroup spacing={0}>
                    <Checkbox mx={5}></Checkbox>
                    {categories.map(category => <Button variant="ghost" onClick={() => setActive(category)} boxSizing="border-box" borderBottom={active === category && "red 2px solid"} py={7} rounded={0}>{category}</Button>)}
                </ButtonGroup>
                <HStack p={2} spacing={2}>
                    <Menu>
                        <MenuButton as={Button} variant="ghost" px={10} leftIcon={<FaCalendar />} rightIcon={<FaChevronDown />}>
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
                    <InputGroup maxW="300px">
                        <InputLeftElement color="gray.300" pointerEvents="none">
                            <FaSearch></FaSearch>
                        </InputLeftElement>
                        <Input placeholder="Search Orders"></Input>
                    </InputGroup>
                    <Button leftIcon={<FaFileExcel></FaFileExcel>}>Export</Button>
                </HStack> 
            </Flex>
            <Box overflowX="auto">
                <AgTable rowSelection={'multiple'} rowData={orderData.orders} offsetY={254}>
                    <AgGridColumn checkboxSelection={true} field="id" />
                    <AgGridColumn headerName="Order Date" cellRendererFramework={TableDate} field="created_at" />
                    <AgGridColumn minWidth={200} cellStyle={{padding: 0}} field="customer" cellRendererParams={{title: "Customer Information",fields:["first_name","last_name","email","phone","total_spent","created_at"]}} cellRendererFramework={TableObjectRenderer} />
                    <AgGridColumn headerName="Products" minWidth={300} field="line_items" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["title","price"], display:"accordion", showFirstName: true}} cellRendererFramework={TableObjectRenderer} />
                    <AgGridColumn editable={true} headerName="Payment (Rs.)" field="total_price" />
                    <AgGridColumn headerName="Payment Type" field="payment_gateway_names" />
                    <AgGridColumn headerName="Actions" pinned="right" field="id" sortable={false} cellRendererFramework={ShipNow} />
                </AgTable>
            </Box>
            <Flex px={4} justifyContent="space-between" alignItems="center" py={2}>
                <Flex alignItems="center">
                    <Text width="160px">Items per page:</Text>
                    <Select maxWidth="80px">
                        <option selected>15</option>
                        <option>50</option>
                        <option>100</option>
                        <option>200</option>
                        <option>500</option>
                    </Select>
                </Flex>
                <ButtonGroup>
                    <Button>Prev</Button>
                    <Button colorScheme="red">Next</Button>
                </ButtonGroup>
            </Flex>
        </Box>
    )
}

export default Orders
