import { Box, Flex, Text, Button, ButtonGroup, Heading, HStack, Container, Link, IconButton, useToast, VStack } from '@chakra-ui/react'
import { AgGridColumn } from 'ag-grid-react'
import remittanceData from '../../assets/data/invoices.json'
import React, { useEffect, useState } from 'react'

import AgTable from '../../components/codbrix-components/table'
import { useHistory, useLocation } from 'react-router'
import useWindowWidth from '../../scripts/width'
import {Link as HyperLink, useParams} from "react-router-dom";
import GenerateInvoice from '../../components/table-components/generateInvoice'
import EditDetails from '../../components/table-components/editDetails'
import { FaArrowLeft } from 'react-icons/fa'
import { getCustomer } from '../../services/customers'
import { viewInvoices } from '../../services/invoices'

const categories = ["Invoices", "Customer Information"]

function Billing(props) {

    const width = useWindowWidth()
    const history = useHistory()
    const location = useLocation()

    const [customer, setCustomer] = useState();
    const [invoices, setInvoices] = useState([]);

    let {number} = useParams();
    const toast = useToast();

    useEffect(() => {

        getCustomer(number).then(res => {
            setCustomer(res);
            viewInvoices(number).then(res => {
                setInvoices(res.data.data.invoices)
                console.log(res.data.data.invoices)
            })
        })



    }, [location])

    return (
        <Container maxW={"7xl"}>
            <Flex pb={8} pt={4} justifyContent={"space-between"} alignItems="end">
               <Flex alignItems={"center"}>
                    <HyperLink to="/app/dashboard">
                        <IconButton mr={4} variant={"ghost"}>
                            <FaArrowLeft/>
                        </IconButton>
                    </HyperLink>
                    <Heading>{number}</Heading>
               </Flex>
               <ButtonGroup>
                    <GenerateInvoice data={{number}} />
                    <EditDetails type={customer?.name === '' ? 'create' : 'update'} number={number} onSuccess={(code, data) => {
                        toast({
                            title: code === 200 ? "Customer Added Successfully!" : "Customer Details Updated!",
                            position: "top",
                            status: "success"
                        })
                        console.log(data)
                        setCustomer(data);
                    }} initials={customer}>
                        <Button>{customer?.name === '' ? 'Add Details' : 'Edit Details'}</Button>
                    </EditDetails>
               </ButtonGroup>
            </Flex>
            <Box>
            {invoices.length > 0 ? <Box overflowX="auto">
                        <AgTable exportButton={false} title="Invoices" minWidth={200} rowData={invoices} offsetY={134}>
                            <AgGridColumn headerName="Invoice ID" field="data.invoice_id" cellRendererFramework={(props) => <HyperLink to={'/invoice'}><Link as="button" fontWeight={"extrabold"} textTransform="uppercase" color="brand.500">Invoice#{props.data.data.invoice_id}</Link></HyperLink>} />
                            <AgGridColumn headerName="Date Range" field="data.date_range" />
                            {/* <AgGridColumn headerName="Products" field="products" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["name","sku", "quantity"], display:"accordion"}} cellRendererFramework={TableObjectRenderer} /> */}
                            <AgGridColumn headerName="Created On" field="data.created_on_date" valueFormatter={(params) => `${Date(params.value).split(' ')[2]} ${Date(params.value).split(' ')[1]} ${Date(params.value).split(' ')[3]}`} />
                            <AgGridColumn headerName="Original Cost" field="data.original_cost" valueFormatter={({value, ...params}) => `$${value}`} />
                            <AgGridColumn headerName="Total Cost" field="data.total_cost" valueFormatter={({value, ...params}) => `$${value}`} />
                        </AgTable>
             
            </Box> : <VStack width={"100%"} p={16} borderStyle="dashed" borderWidth={2} rounded={12} bg="gray.100">
                    <Heading size="md" textAlign={"center"}>No Invoices Found!</Heading>
                    <Text>Start Creating Invoices and send it to your customer.</Text>
            </VStack>}

            </Box>
        </Container>
    )
}

export default Billing
