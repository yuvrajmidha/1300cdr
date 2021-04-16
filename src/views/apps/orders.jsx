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

function Orders() {

    return (
        <Box>
            <Alert maxHeight="64px" justifyContent="space-between" status="error">
                <Flex overflow="hidden">
                    <AlertIcon />
                    <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">Your products are not mapped with our products.</Text>
                </Flex>
                <Link to="/app/products">
                    <Button colorScheme="red">
                        Map Products
                    </Button>
                </Link>
            </Alert>
            
            <Box overflowX="auto">
                <AgTable categories={["All", "Not Shipped","Cancelled", "Closed", "Archived"]} rowSelection={'multiple'} rowData={orderData.orders} offsetY={140}>
                    <AgGridColumn checkboxSelection={true} field="name" />
                    <AgGridColumn headerName="Order Date" cellRendererFramework={TableDate} field="created_at" />
                    <AgGridColumn minWidth={200} cellStyle={{padding: 0}} field="customer" cellRendererParams={{title: "Customer Information",fields:["first_name","last_name","email","phone","total_spent","created_at"]}} cellRendererFramework={TableObjectRenderer} />
                    <AgGridColumn headerName="Products" minWidth={300} field="line_items" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["title","price"], display:"accordion", showFirstName: true}} cellRendererFramework={TableObjectRenderer} />
                    <AgGridColumn editable={true} headerName="Payment (Rs.)" field="total_price" />
                    <AgGridColumn headerName="Payment Type" field="payment_gateway_names" />
                    <AgGridColumn headerName="Actions" minWidth={200} field="id" sortable={false} cellRendererFramework={ShipNow} />
                </AgTable>
            </Box>
            
        </Box>
    )
}

export default Orders
