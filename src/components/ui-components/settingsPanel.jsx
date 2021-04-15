import React from 'react'
import { Box, Divider,Heading, Stack, Text } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'

function SettingsPanel({title, description, children, footer}) {
    const footerColor = useColorModeValue("gray.100", "gray.700")
    return (
        <Box bg={useColorModeValue('#fff', "gray.800")} width={["100%", "100%","100%", "100%","66%"]} my={8} borderWidth={1} rounded="md">
            <Heading size="md" px={8} pt={8} mb={2}>{title}</Heading>
            <Text px={8}>{description}</Text>
            <Box p={8}>
                {children}
            </Box>
            <Divider></Divider>
            {footer && <Stack bg={footerColor}  direction={{base:"column", sm: "row"}} spacing={4} px={8} py={4} alignItems={{md:"center"}} justifyContent={{md: "space-between"}}>
                {footer}
            </Stack>}
        </Box>
    )
}

export default SettingsPanel
