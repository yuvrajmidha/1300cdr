import { Box } from '@chakra-ui/layout'
import React from 'react'
import {formatDate} from '../../scripts/utils'

function Date(props) {

    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

    return (
        <Box>
            {formatDate(cellValue)}
        </Box>
    )
}

export default Date