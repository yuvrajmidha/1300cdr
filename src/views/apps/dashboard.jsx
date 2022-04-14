import { Box} from '@chakra-ui/layout'
import { AgGridColumn } from 'ag-grid-react'
import shippingData from '../../assets/data/customers.json'
import TableObjectRenderer from '../../components/table-components/object';
import React, { useEffect, useState } from 'react'
import AgTable from '../../components/codbrix-components/table'
import { Button, ButtonGroup, Container, useToast, Link } from '@chakra-ui/react';
import generateInvoice from '../../components/table-components/generateInvoice';
import {Link as HyperLink} from "react-router-dom";
import EditDetails from '../../components/table-components/editDetails';
import { getCustomers } from '../../services/customers';



function Shipments() {

    const [numbers, setNumbers] = useState([])

    function Actions(props) {

        const toast = useToast();
    
        return <>
        {props.data.name ? 
            generateInvoice(props)
       : <EditDetails number={props.data.number} onSuccess={(code, data) => {
            toast({
                title: code === 200 ? "Customer Added Successfully!" : "Customer Details Updated!",
                position: "top",
                status: "success"
            })
            getCust(1)
        }} type={"create"}><Button width={"100%"} ml="auto">Add Details</Button></EditDetails>}</>
       
    }

    function getCust(page){
        getCustomers(page).then(res => {
            var customers = [];
            Object.entries(res).map(cust => {
                if(cust[0] !== 'Anonymous' && cust[0] !== '' && cust[0] !== 'undefined' && cust[0] !== 'No Answer'){
                    customers.push({
                        id: cust[1].id,
                        total_calls: cust[1].total_calls,
                        name: cust[1].name,
                        email: cust[1].email,
                        number: cust[0],
                        charges: cust[1].charges,
                    })
                }
            })

            setNumbers(customers);
        })
    }

    useEffect(() => {
        getCust(1)
    }, [])

    return (
            <Container maxW={"8xl"}>
                <AgTable 
                    title="Customers"
                    rowData={numbers} 
                    offsetY={76}
                    minWidth={120}
                    exportButton = {false}
                    dateRange={false}
                    >
                    <AgGridColumn field="number" cellRendererFramework={(props) => <HyperLink to={'/app/billing/' + props.data.number}><Link as="button" fontWeight={"extrabold"} textTransform="uppercase" color="brand.500">{props.value}</Link></HyperLink>} />
                    <AgGridColumn field="name" />
                    <AgGridColumn field="email" />
                    <AgGridColumn headerName="Mobile Call" valueFormatter={(params) => params.value && `$${params?.value}/min`} field="charges.mobile" />
                    <AgGridColumn headerName="National Call" valueFormatter={(params) => params.value && `$${params?.value}/min`} field="charges.national" />
                    <AgGridColumn headerName="International Call" valueFormatter={(params) => params.value && `$${params?.value}/min`} field="charges.international" />
                    <AgGridColumn headerName="Total Calls" valueFormatter={(params) => params.value > 999 ? `${Math.floor(params.value/1000)}K` : params.value} field="total_calls" />
                    <AgGridColumn headerName="Actions" minWidth={200} field="number" cellRendererFramework={Actions}></AgGridColumn>
                </AgTable>
            </Container>
    )
}

export default Shipments
