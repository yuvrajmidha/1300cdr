import { Badge, Box, Divider, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import React, { useContext, useState } from 'react'
import products from '../../assets/data/products.json'
import Container from '../../components/ui-components/container'
import { FaCartPlus, FaTrash, FaTrashAlt } from 'react-icons/fa'
import { useColorModeValue } from '@chakra-ui/color-mode'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
  } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/button'
import { Select } from '@chakra-ui/select'
import { useHistory } from 'react-router'

function Inventory() {

    const history = useHistory()
    const color = useColorModeValue("#fff","#000")

    const [cartBuy, setCartBuy] = useState([])
    const [cartSell, setCartSell] = useState([])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Container>
            <Drawer
                isOpen={isOpen}
                placement="right"
                size="md"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Buy Products</DrawerHeader>
                    <DrawerBody>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Product</Th>
                                    <Th>Quantity</Th>
                                    <Th>Price</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Push Up Board</Td>
                                    <Td>
                                        <NumberInput defaultValue={20}>
                                            <NumberInputField maxWidth="80px"></NumberInputField>
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </Td>
                                    <Td>Rs.6000/-</Td>
                                    <Td><Button variant="ghost"><FaTrash /></Button></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Flex width="100%" justifyContent="flex-end">
                            <Button mt={6} colorScheme="brand" size="lg">Pay Rs. 6000/-</Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
                </DrawerOverlay>
            </Drawer>
            <Flex py={24} justifyContent="space-between" alignItems="center" width="100%">
                <Heading mb={0} >Inventory</Heading>
                <Button onClick={() => history.push('/app/billing/inventorylogs')}>View Logs</Button>
            </Flex>
            {/* <Flex alignItems="center" my={6}>
                <Text width="160px">Filter by product</Text>
                <Select defaultValue={"All"} maxW="256px">
                    <option>Product 1</option>
                    <option>Product 2</option>
                    <option>Product 3</option>
                    <option>Product 4</option>
                    <option>Product 5</option>
                </Select>
            </Flex> */}
            <VStack mb={32} spacing={4}>
                {products.map(product => 
                    <Flex alignItems="center" py={4} px={6} overflow="hidden" width={{base:"100%"}} shadow="lg" rounded="lg" bg={color}>
                            <Flex width={{base: "100%", md:"25%"}} direction="column">
                                <Heading size="md">Product Name</Heading>
                                <Box><Badge colorScheme="green" variant="outline">Available</Badge></Box>
                            </Flex>
                            <Box width={{base: "100%", md:"25%"}} px={4}>
                                <Text fontSize="sm" mb={0}>Cost Price</Text>
                                <Text fontSize="xl" fontWeight="bold">Rs. 340/-</Text>
                            </Box>
                            <Box width={{base: "100%", md:"25%"}} px={4}>
                                <Text fontSize="sm" mb={0}>In My Stock</Text>
                                <Text fontSize="xl" fontWeight="bold">23 items</Text>
                            </Box>
                            <ButtonGroup width={{base: "100%", md:"25%"}} justifyContent="flex-end">
                                <Button onClick={onOpen} colorScheme="red" leftIcon={<FaCartPlus></FaCartPlus>}>Buy More</Button>
                                <Button onClick={onOpen}>Sell Back</Button>
                            </ButtonGroup>
                    </Flex>
                )}
            </VStack>
        </Container>
    )
}

export default Inventory
