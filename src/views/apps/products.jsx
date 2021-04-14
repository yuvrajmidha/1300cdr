import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import Container from '../../components/ui-components/container'
import products from '../../assets/data/products.json'
import { Image } from '@chakra-ui/image'
import { Select } from '@chakra-ui/select'

function Products() {

    const color = useColorModeValue("#fff", "gray.800");

    return (
        <>
        <Container>
            <Box width="100%">
                <Heading py={24}>My Products</Heading>
            </Box>
            <Box>
                {products.map(product => <Flex alignItems="center" justifyContent={"space-between"} bg={color} my={3} shadow="md" p={4} rounded={4}>
                    <Flex alignItems="center">
                        <Box size="64px" mr={4} overflow="hidden" rounded={4}>
                            <img height="64px" width="64px" src="https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph"></img>
                        </Box>
                        <Box>
                            <Heading size="md">Product Name</Heading>
                            <Heading size="sm" color="green">Rs. 500/-</Heading>
                        </Box>
                    </Flex>
                    <Box maxW="300px" width="100%">
                        <Text mb={2}><b>Mapped with</b></Text>
                        <Select>
                            <option>Product 1</option>
                            <option>Product 2</option>
                            <option>Product 3</option>
                            <option>Product 4</option>
                            <option>Product 5</option>
                        </Select>
                    </Box>
                </Flex>)}
            </Box>
        </Container>
        </>     
    )
}

export default Products