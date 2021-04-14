import { Badge, Box } from '@chakra-ui/layout'
import React from 'react'

function orderType(props) {
    return (
        <Box>
            {props.value.includes("Cash on Delivery (COD)") ? <Badge>COD</Badge> : <Badge>Prepaid</Badge>}
        </Box>
    )
}

export default orderType
