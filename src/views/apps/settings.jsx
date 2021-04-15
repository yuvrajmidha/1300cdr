import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Box, Divider, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import Container from '../../components/ui-components/container'
import SettingsPanel from '../../components/ui-components/settingsPanel'

const settingsTab = ["General", "Account", "Security", "Danger Zone"]

function Settings() {
    return (
        <Box>
            <Box py={20}>
                <Container>
                    <Flex direction="column" alignItems="center">
                        <Heading mb={8} size="2xl">Settings</Heading>
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
                                    title="Shopify API Configrations"
                                    description="Change the credentials from where orders are fetched."
                                    footer={<>
                                        <Text>To know more about how to make a private app in Shopify.<br></br> Visit <Link color="blue.400" href="#">Shopify Documentation</Link></Text>
                                        <Button colorScheme="green">Save</Button>
                                    </>}
                                    >   
                                    <Divider></Divider>
                                    <Stack direction="column" spacing={4} my={3}>
                                        <Heading size="sm">API Key</Heading>
                                        <Input defaultValue="ed10d1111a53637faa7d0b015856c05c"></Input>
                                        {/* <Text>User must log in to fill the form.</Text> */}
                                    </Stack>
                                    <Divider></Divider>
                                    <Stack direction="column" spacing={4} my={3}>
                                        <Heading size="sm">Password</Heading>
                                        <Input defaultValue="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"></Input>
                                        {/* <Text>User must log in to fill the form.</Text> */}
                                    </Stack>
                                    <Divider></Divider>
                                    <Stack direction="column" spacing={4} my={3}>
                                        <Heading size="sm">Order URL</Heading>
                                        <Input defaultValue="https://ed10d1111a53637faa7d0b015856c05c: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@sponiq1.myshopify.com/admin/api/2021-01/orders.json"></Input>
                                        {/* <Text>User must log in to fill the form.</Text> */}
                                    </Stack>
                                    <Divider></Divider>
                                    <Stack direction="column" spacing={4} my={3}>
                                        <Heading size="sm">Shared Secret</Heading>
                                        <Input defaultValue="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"></Input>
                                        <Text>Shared secrets are use to <Link isExternal color="blue.400" href="#"> validate the integrity of Webhooks</Link></Text>
                                    </Stack>
                                </SettingsPanel>
                            </TabPanel>
                            <TabPanel>
                            </TabPanel>
                            <TabPanel>
                            </TabPanel>
                            <TabPanel>
                            <SettingsPanel 
                                    title="Delete Account"
                                    description="Your account will be permanentally deleted and with any refund of your bought products or wallet amount."
                                >
                                <Button colorScheme="red">Delete Account</Button>
                            </SettingsPanel>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    
                </Container>
            </Box>
        </Box>
    )
}

export default Settings
