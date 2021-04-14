import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Switch, NumberInput, NumberInputField, Alert, AlertIcon } from "@chakra-ui/react"
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import PageHeader from '../../../components/layout-components/pageHeader'
import Container from '../../../components/ui-components/container'
import SettingsPanel from '../../../components/ui-components/settingsPanel'
import SchemaEditor from '../../../components/codbrix-components/schemaEditor'

const settingsTab = ["General", "Fields", "Danger Zone"]

function FormSettings() {

    const [startDate, setStartDate] = useState(new Date());
    const [tab, setTab] = useState("General")

    

    return (
        <Box>
            <PageHeader title="Form Title" back="/app/forms/form/gst-registration"/>

            <Box mx="-16px" py={20}>
                <Container>
                    <Flex direction="column" alignItems="center">
                        <Heading mb={8} size="2xl">Form Settings</Heading>
                        <Text>Update the settings of <b>gst-registration</b></Text>
                    </Flex>
                </Container>

            </Box>
            <Box>
                <Container>
                    <Tabs>
                        <TabList>
                            {settingsTab.map(item => <Tab py={3} px={4} key={item}>{item}</Tab>)}
                        </TabList>

                        <TabPanels>
                            <TabPanel p={{md: 4}}>
                                <SettingsPanel
                                    title="Form Name"
                                    description="Address name of the form."
                                    footer={<>
                                        <Text>Name must be unique and below 48 characters.</Text>
                                        <Button colorScheme="green">Save</Button>
                                </>}>
                                <Input defaultValue="gst-registration"></Input>
                                </SettingsPanel>

                                <SettingsPanel 
                                    title="Status"
                                    description="Whether the form is active or disabled."
                                    footer={<>
                                        <Text>Disabling form will means no more submissions would occur.</Text>
                                        <Button minW="128px" colorScheme="red">Disable Form</Button>
                                    </>}>
                                        <Alert p={0} status="success" bg="transparent">
                                            <AlertIcon />
                                            <Heading size="md" color="green">Accepting</Heading>
                                        </Alert>
                                </SettingsPanel>

                                <SettingsPanel
                                    title="Configrations"
                                    description="Customize the form behaviour."
                                    footer={<>
                                        <Text>These changes are optional but strongly recommended.</Text>
                                        <Button colorScheme="green">Save</Button>
                                    </>}
                                    >   
                                    <Divider></Divider>
                                    <Stack direction={{sm: "row", base: "column"}} spacing={4} my={3} alignItems={{sm: "center"}} justifyContent={{sm: "space-between"}}>
                                        <Box>
                                            <Heading size="sm">Authentication Required</Heading>
                                            <Text>User must log in to fill the form.</Text>
                                        </Box>
                                        <Switch></Switch>
                                    </Stack>
                                    <Divider></Divider>
                                    <Stack direction={{sm: "row", base: "column"}} spacing={4} my={3} alignItems={{sm: "center"}} justifyContent={{sm: "space-between"}}>
                                        <Box>
                                            <Heading size="sm">One Submission per User</Heading>
                                            <Text>Only one submission by a user.</Text>
                                        </Box>
                                        <Switch></Switch>
                                    </Stack>
                                    <Divider></Divider>
                                    <Stack direction={{sm: "row", base: "column"}} spacing={4} my={3} alignItems={{sm: "center"}} justifyContent={{sm: "space-between"}}>
                                        <Box>
                                            <Heading size="sm">Blocked Emails</Heading>
                                            <Text>Users which are restrcited to fill the form.</Text>
                                        </Box>
                                        <Button justifyContent={{base: "left", lg:"center"}} variant="link">3 Blocked Emails</Button>
                                    </Stack>
                                    <Divider></Divider>
                                    <Stack direction={{sm: "row", base: "column"}} spacing={4} my={3} alignItems={{sm: "center"}} justifyContent={{sm: "space-between"}}>
                                        <Box>
                                            <Heading size="sm">Maximum Submissions</Heading>
                                            <Text>Total Submissions after which form will be disabled.</Text>
                                        </Box>
                                        <NumberInput width="128px" min={1} defaultValue={15}>
                                            <NumberInputField></NumberInputField>
                                        </NumberInput>
                                    </Stack>
                                    <Divider></Divider>
                                    <Stack direction={{sm: "row", base: "column"}} spacing={4} my={3} alignItems={{sm: "center"}} justifyContent={{sm: "space-between"}}>
                                        <Box>
                                            <Heading size="sm">Expires On/ Last Date</Heading>
                                            <Text>The date by which form will be disabled.</Text>
                                        </Box>
                                        <Input maxW="192px" type="date"></Input>
                                    </Stack>
                                    <Divider></Divider>
                                </SettingsPanel>
                            </TabPanel>
                            <TabPanel>
                                <SchemaEditor></SchemaEditor>
                            </TabPanel>
                            <TabPanel>
                            <SettingsPanel 
                                    title="Delete Form"
                                    description="The form will be permanently deleted, including its submissions and fields, the action is irreversible and can not be undone."
                                >
                                <Button colorScheme="red">Delete</Button>
                            </SettingsPanel>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    
                </Container>
            </Box>
        </Box>
    )
}

export default FormSettings
