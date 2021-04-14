import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import Container from '../../components/ui-components/container'
import ReactQuill from 'react-quill';
import { FaPhoneAlt } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/button';

function Support() {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <Box mb={24}>
                <Container>
                    <Flex alignItems="center" justifyContent="space-between" px={4} py={20}>
                        <Box>
                            <Heading mb={4} size="2xl">Dropstocks Support</Heading>
                            <Text mx={1}>Submit a ticket to let us know what issues you are facing.</Text>
                        </Box>
                        <Button colorScheme="red" leftIcon={<FaPhoneAlt />}>Call Now</Button>
                    </Flex>
                    <Flex wrap="wrap" width="100%">
                        {toggle && <Box px={2}>
                            <Box my={6} bg="#fff" shadow="lg" width={{base: "100%", lg: "80%"}} rounded="lg">
                                <Box px={6} py={4} fontWeight="bold" borderBottomWidth={1}>My Name</Box>
                                <Text p={6}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos nobis? Magnam saepe temporibus labore, possimus perferendis nostrum consequuntur ab, illo natus voluptates libero quod facilis! Facere ad architecto delectus.</Text>
                            </Box>
                            <Box my={6} bg="#fff" shadow="lg" width={{base: "100%", lg: "80%"}} rounded="lg">
                                <Box px={6} py={4} fontWeight="bold" borderBottomWidth={1}>DropStocks Team</Box>
                                <Text p={6}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos nobis? Magnam saepe temporibus labore, possimus perferendis nostrum consequuntur ab, illo natus voluptates libero quod facilis! Facere ad architecto delectus.</Text>
                            </Box>
                        </Box>}
                        <Box px={2} width={{base: "100%", lg:toggle ? "80%" : "50%"}}>
                            <Box minHeight="300px" bg="#fff" p={3} rounded="xl" shadow="xl">
                                <ReactQuill></ReactQuill>
                            </Box>
                            <Button onClick={() => setToggle(!toggle)} colorScheme="green" mt={4} size="lg" rounded="lg">{toggle ?"Reply" : "Submit"}</Button>
                        </Box>
                        {!toggle && <Box px={2} width={{base: "100%", lg:toggle ? "40%" : "50%"}}>
                            <Box bgGradient="linear(to-tr, red.400, brand.500)" pos="relative" height="300px" color="white" p={12} rounded="xl">
                                <Heading mt={6} size="md">Still not resolved? Call Us Directly</Heading>
                                <Heading mt={2} size="2xl">65485 54555</Heading>
                                <Box pos="absolute" opacity=".6" bottom="-10px" right="-20px" transform="rotateY(180deg)">
                                    <Icon as={FaPhoneAlt} fontSize="200px"></Icon>
                                </Box>
                            </Box>
                        </Box>}
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default Support
