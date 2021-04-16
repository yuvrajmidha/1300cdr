import { Box} from '@chakra-ui/layout'
import { AgGridColumn } from 'ag-grid-react'
import shippingData from '../../assets/data/shipments.json'
import TableObjectRenderer from '../../components/table-components/object';
import React from 'react'

import AgTable from '../../components/codbrix-components/table'
import OrderTrack from '../../components/table-components/orderTrack'

function Shipments() {

    return (
            <Box overflowX="auto">
                <AgTable 
                    categories={["All", "Shipped","Picked Up", "On The Way", "Delivered", "RTO In-Transit", "RTO Delivered", "Others"]}
                     rowData={shippingData} 
                     offsetY={76}>
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
    )
}

export default Shipments
