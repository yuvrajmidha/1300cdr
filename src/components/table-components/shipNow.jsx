import { Button, ButtonGroup } from '@chakra-ui/button'
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Box,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import { FaArchive, FaArrowRight, FaListAlt, FaShippingFast } from 'react-icons/fa'

function ShipNow() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <ButtonGroup width="100%" alignItems="center">
            <Button onClick={onOpen} leftIcon={<FaShippingFast></FaShippingFast>} colorScheme="red" width="100%" mt={.5}>
                Ship Now
            </Button>
            <Button width="48px" mt={.5}>
                <FaArchive></FaArchive>
            </Button>
        </ButtonGroup>
        <Modal size="6xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader px={12} borderBottomWidth={1}>Shipping Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflowX="auto">
                <Heading mt={4} px={6} size="md" display="flex">Items Details</Heading>
                <Divider my={2}></Divider> 
                <Table minWidth="992px" variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Product Name</Th>
                            <Th>Mapped with</Th>
                            <Th textAlign="center">Quantity</Th>
                            <Th textAlign="center">Available Stock</Th>
                            <Th>Price</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Push Up Board</Td>
                            <Td>Product 1</Td>
                            <Td textAlign="center">5</Td>
                            <Td fontWeight="bold" color="green.400" textAlign="center">25</Td>
                            <Td>Rs. 335/-</Td>
                            <Td fontWeight="bold" color="green.400">Can Be Shipped</Td>
                        </Tr>
                        <Tr>
                            <Td>AroMist Ultra Sonic Diffuser</Td>
                            <Td>Aro Mist Diffuser</Td>
                            <Td textAlign="center">2</Td>
                            <Td fontWeight="bold" color="red.400" textAlign="center">1</Td>
                            <Td>Rs. 335/-</Td>
                            <Td fontWeight="bold" color="red.400">1 Item Short</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Flex p={6} mt={2} wrap="wrap">
                    {/* <Box width="100%">
                        <Heading size="md">Customer Details</Heading>
                        <Divider my={2}></Divider> 
                        <Flex wrap="wrap">
                            <Text my={2} width={{base: "100%", md: "50%", lg: "33%"}}>
                                <b>Name:</b> Kanika Kaur
                            </Text>
                            <Text my={2} width={{base: "100%", md: "50%", lg: "33%"}}>
                                <b>Email:</b> kanika12@gmail.com
                            </Text>
                            <Text my={2} width={{base: "100%", md: "50%", lg: "33%"}}>
                                <b>Phone:</b> +91 754 865 7459
                            </Text>
                            <Divider></Divider> 
                            <Text my={2} width={{base: "100%"}}>
                                <b>Adress:</b> 47 D Block, Block Area, Near Vakilo Wali Diggi
                            </Text>
                            <Divider></Divider> 
                            <Text my={2} width={{base: "100%", md: "50%", lg: "33%"}}>
                                <b>City:</b> Sri Ganganagar
                            </Text>
                            <Text my={2} width={{base: "100%", md: "50%", lg: "33%"}}>
                                <b>State:</b> Rajasthan
                            </Text>
                            <Text my={2} width={{base: "100%", md: "50%", lg: "33%"}}>
                                <b>Pin Code:</b> 335001
                            </Text>
                        </Flex>
                    </Box> */}
                    <Box width="100%">
                        <Heading size="md">Summary</Heading>
                        <Divider my={2}></Divider> 
                        <Text width={{base: "100%", md: "50%", lg: "33%"}} display="flex" justifyContent="space-between">
                            <b>Payment Type:</b> <span>Prepaid</span>
                        </Text>
                        <Divider my={2}></Divider> 
                        <Text width={{base: "100%", md: "50%", lg: "33%"}} display="flex" justifyContent="space-between">
                            <b>Product Charges:</b> <span>Rs. 1789/-</span>
                        </Text>
                        <Divider my={2}></Divider> 
                        <Text width={{base: "100%", md: "50%", lg: "33%"}} display="flex" justifyContent="space-between">
                            <b>Shipping Charges:</b> <span>Rs. 89/-</span>
                        </Text>
                        <Divider my={2}></Divider> 
                        <Text alignItems="center" width={{base: "100%", md: "50%", lg: "33%"}} display="flex" justifyContent="space-between">
                            <b>Total</b> <Text fontSize="xl" fontWeight="bold">Rs. 1878/-</Text>
                        </Text>
                    </Box>
                </Flex>
            </ModalBody>
            <ModalFooter  pb={8} justifyContent="flex-start" px={12}>
                <Button rightIcon={<FaArrowRight></FaArrowRight>} colorScheme="brand" mr={3} >
                    Buy Products from Inventory
                </Button>
                <Button onClick={onClose} variant="ghost">Cancel Shipping</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default ShipNow
