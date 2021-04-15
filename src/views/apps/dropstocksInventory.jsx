import { Badge, Box, Flex, Heading, HStack} from '@chakra-ui/layout'
import React from 'react'
import products from '../../assets/data/products.json'
import Container from '../../components/ui-components/container'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image'

function DropstocksInventory() {

    const color = useColorModeValue("#fff","#000")

    return (
        <Container>
            <Box width="100%">
                <Heading py={24}>Dropstocks Inventory</Heading>
            </Box>
            <HStack mb={32} spacing={4}>
                {products.map(product => 
                    <Box overflow="hidden" width={{base:"100%",sm:"50%",xl:"33%"}} shadow="lg" rounded="lg" bg={color}>
                        <Image src={product.image} h="160px" width="100%" objectFit="cover"></Image>
                        <Box p={6}>
                            <Flex mt={4} alignItems="center">
                                <Heading size="md">Product Name</Heading>
                                <Box ml={2}><Badge colorScheme="green" variant="outline">Available</Badge></Box>
                            </Flex>
                            <Heading color="green.400" mt={2} size="lg">₹{product.price}</Heading>
                            {/* <Flex mt={4} alignItems="center" justifyContent="space-between">
                                <Box>
                                    <Text fontSize="sm" mb={0}>In My Stock</Text>
                                    <Text fontSize="xl" fontWeight="bold">23 items</Text>
                                </Box>
                                <Button colorScheme="red" leftIcon={<FaCartPlus></FaCartPlus>}>Buy Now</Button>
                            </Flex> */}
                        </Box>
                    </Box>
                )}
            </HStack>
        
        </Container>
    )
}

export default DropstocksInventory
