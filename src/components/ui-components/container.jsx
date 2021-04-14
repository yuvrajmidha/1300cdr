import { Box } from '@chakra-ui/layout'
import React from 'react'

function Container({maxWidth=[["100%", "100%", "100%","100%","100%","1140px"]], children, ...props}) {
    return (
        <Box mx="auto" px={{md:4}} maxWidth={maxWidth} {...props}>
            {children}
        </Box>
    )
}

export default Container
