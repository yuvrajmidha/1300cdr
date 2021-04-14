import { Button, ButtonGroup } from '@chakra-ui/button'
import { Badge, Box, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import React, { PureComponent } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PageHeader from '../../../components/layout-components/pageHeader'

class Forms extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Box>
                <PageHeader title={"Forms"} extras={<ButtonGroup>
                        <Button variant="ghost" leftIcon={<FaSearch />} />
                        <Button variant="solid" leftIcon={<FaPlus />}>New Form</Button>
                    </ButtonGroup>}>
                </PageHeader>
                <Box my={4}>
                    <SimpleGrid spacing={4} columns={[1,1,2,2,3,4]}>
                        <Box cursor="pointer" borderWidth={1} rounded={8}>
                            <Link to="/app/forms/form/gst-registration"><Heading _hover={{color: "gray.500"}} pt={6} px={6} size="md">gst-registration</Heading></Link>
                            <Box color="gray.500" px={6} py={4}>
                                <Text>31 Submissions</Text>
                                <Text>Last Submission On 13th April</Text>
                            </Box>
                            <Divider></Divider>
                            <Flex justifyContent="space-between" px={6} py={3}>
                                <Box><Badge variant="outline" py={1} px={2} rounded={6} colorScheme="green">Active</Badge></Box>
                                <Text color="gray.500">Updated 1h ago</Text>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        )
    }
}

export default Forms