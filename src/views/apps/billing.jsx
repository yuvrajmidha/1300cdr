import { Button, ButtonGroup } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import { AgGridColumn } from '../../ag-grid-react'
import remittanceData from '../../assets/data/remittance.json'
import walletData from '../../assets/data/walletlogs.json'
import inventoryData from '../../assets/data/inventorylogs.json'
import TableObjectRenderer from '../../components/table-components/object';
import React, { useEffect, useState } from 'react'

import AgTable from '../../components/codbrix-components/table'
import { useHistory, useLocation } from 'react-router'

const categories = ["COD Remittance", "Wallet Recharges","Inventory Logs"]

function Billing() {

    const history = useHistory()
    const location = useLocation()
    const [active, setActive] = useState()

    useEffect(() => {
        setActive(location.pathname.split('/')[3])
    }, [location])

    return (
        <Box>
            <Flex alignItems="end">
                <ButtonGroup spacing={0}>
                    {categories.map(category => <Button variant="ghost" onClick={() => history.push('/app/billing/' + category.toLowerCase().replace(/ /g, ""))} boxSizing="border-box" borderBottom={active === category.toLowerCase().replace(/ /g, "") && "red 2px solid"} py={7} rounded={0}>{category}</Button>)}
                </ButtonGroup>
            </Flex>
            <Box>
            <Box overflowX="auto">
                {active === "codremittance" && <AgTable rowData={remittanceData} offsetY={134}>
                            <AgGridColumn headerName="Order Date" field="date" />
                            <AgGridColumn field="order_id" />
                            {/* <AgGridColumn headerName="Products" field="products" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["name","sku", "quantity"], display:"accordion"}} cellRendererFramework={TableObjectRenderer} /> */}
                            <AgGridColumn headerName="Amount" field="remittance_amount" />
                            <AgGridColumn headerName="Payment Method" field="method" />
                            <AgGridColumn headerName="Status" field="status" />
                            <AgGridColumn headerName="Remarks" field="remarks" />
                        </AgTable>}
                {active === "walletrecharges" && <AgTable rowData={walletData} offsetY={134}>
                            <AgGridColumn headerName="Date" field="date" />
                            <AgGridColumn field="txn_id" />
                            {/* <AgGridColumn headerName="Products" field="products" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["name","sku", "quantity"], display:"accordion"}} cellRendererFramework={TableObjectRenderer} /> */}
                            <AgGridColumn headerName="Amount" field="amount" />
                        </AgTable>}
                {active === "inventorylogs" && <AgTable rowData={inventoryData} offsetY={134}>
                    <AgGridColumn headerName="Date" field="date" />
                    <AgGridColumn field="txn_id" />
                    <AgGridColumn headerName="Products" field="products" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["name","sku", "quantity"], display:"accordion"}} cellRendererFramework={TableObjectRenderer} />
                    <AgGridColumn headerName="Amount" field="amount" />
                </AgTable>}
    </Box>
            </Box>
        </Box>
    )
}

export default Billing
