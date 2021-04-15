import { useColorModeValue } from '@chakra-ui/color-mode'
import {
    chakra,
    Stat,
    StatLabel,
    StatNumber,
  } from "@chakra-ui/react"
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import Container from '../../components/ui-components/container'
import { PieChart } from 'react-minimal-pie-chart';

const MyChart = chakra(PieChart)

function Dashboard() {
    return (
        <Flex alignItems={{base:"flex-start",xl:"center"}} mt={16} minHeight="calc(100vh - 76px)" pb={32}>
            <Container>
            <Box px={12} pb={20} width="100%">
                <Heading>Hi, John 👋 </Heading>
                <Text mt={2} fontWeight={600} opacity={.7}>We are glad to see you back.</Text>
            </Box>
            <Box>
                <Flex wrap="wrap">
                    <Flex justifyContent="center" alignItems="center" my={8} p={2} w={{base:"100%", xl:"40%"}}>
                        <MyChart segmentsShift={2} height="300px"
                            radius={PieChart.defaultProps.radius - 6}
                            lineWidth={60}
                            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                            animate
                            data={[
                                { title: 'One', value: 10, color: '#ECC94B' },
                                { title: 'Two', value: 15, color: '#E53E3E' },
                                { title: 'Three', value: 20, color: '#6B46C1' },
                            ]}
                        />
                    </Flex>
                    <Flex wrap="wrap" width={{base:"100%", xl:"60%"}} direction={{sm:"column", md:"row"}}>
                        <Box mb={2} px={2} width={{base:"100%", md:"50%"}}>
                            <Box borderColor="yellow.500" borderBottomWidth={4} p={8} shadow="lg" bg={useColorModeValue("#fff","#000")} rounded={10}>
                                <Stat>
                                    <StatLabel fontWeight="bold">Total Orders</StatLabel>
                                    <StatNumber fontWeight={800} fontSize="5xl">2,344</StatNumber>
                                </Stat>
                            </Box>
                        </Box>
                        <Box px={2} mb={2} width={{base:"100%", md:"50%"}}>
                            <Box borderColor="purple.500" borderBottomWidth={4} p={8} shadow="lg" bg={useColorModeValue("#fff","#000")} rounded={10}>
                                <Stat>
                                    <StatLabel fontWeight="bold">Shipped Orders</StatLabel>
                                    <StatNumber fontWeight={800} fontSize="5xl">524</StatNumber>
                                </Stat>
                            </Box>
                        </Box>
                        <Box px={2} mt={2} width={{base:"100%", md:"50%"}}>
                            <Box borderColor="red.500" borderBottomWidth={4} p={8} shadow="lg" bg={useColorModeValue("#fff","#000")} rounded={10}>
                                <Stat>
                                    <StatLabel fontWeight="bold">Orders Deliverd</StatLabel>
                                    <StatNumber fontWeight={800} fontSize="5xl">310</StatNumber>
                                </Stat>
                            </Box>
                        </Box>
                        <Box px={2} mt={2} width={{base:"100%", md:"50%"}}>
                            <Box borderColor="green.500" borderBottomWidth={4} p={8} shadow="lg" bg={useColorModeValue("#fff","#000")} rounded={10}>
                                <Stat>
                                    <StatLabel fontWeight="bold">Earnings</StatLabel>
                                    <StatNumber fontWeight={800} fontSize="5xl" >₹112,344</StatNumber>
                                </Stat>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Container>
        </Flex>
    )
}

export default Dashboard
