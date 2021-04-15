import { Button, ButtonGroup } from '@chakra-ui/button'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Flex, HStack } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { AgGridColumn } from 'ag-grid-react'
import shippingData from '../../assets/data/shipments.json'
import TableObjectRenderer from '../../components/table-components/object';
import React, { useState } from 'react'
import { FaCalendar, FaChevronDown, FaSearch } from 'react-icons/fa'

import AgTable from '../../components/codbrix-components/table'
import OrderTrack from '../../components/table-components/orderTrack'

const categories = ["All", "Shipped","Picked Up", "On The Way", "Delivered", "RTO In-Transit", "RTO Delivered", "Others"]

function Shipments() {

    const [active, setActive] = useState("All")

    return (
        <Box>
            <Flex alignItems="end" justifyContent="space-between">
                <ButtonGroup spacing={0}>
                    
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
                </HStack> 
            </Flex>
            <Box>
            <Box overflowX="auto">
                <AgTable rowData={shippingData} offsetY={134}>
                    <AgGridColumn headerName="Order Date" field="created_at" />
                    <AgGridColumn field="id" />
                    <AgGridColumn headerName="Products" field="products" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["name","sku", "quantity"], display:"accordion"}} cellRendererFramework={TableObjectRenderer} />
                    <AgGridColumn headerName="AWB Number" field="awb" />
                    <AgGridColumn headerName="Payment Type" field="payment_method" />
                    <AgGridColumn headerName="Status" field="status" />
                    <AgGridColumn headerName="Charges" field="charges" cellStyle={{padding: 0}} cellRendererParams={{title: "Charges",fields:["charge_weight_amount","cod_charges", "zone", "applied_weight", "charged_weight"]}} cellRendererFramework={TableObjectRenderer} />
                    <AgGridColumn headerName="Actions" field="awb" cellRendererFramework={OrderTrack}></AgGridColumn>
                </AgTable>
            </Box>
            </Box>
        </Box>
    )
}

export default Shipments
