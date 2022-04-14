import { Box, Center, Flex } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { Route, Switch, useLocation, withRouter } from 'react-router'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuItem,
    useColorMode,
    IconButton,
  } from "@chakra-ui/react"
import Sidebar from '../components/layout-components/sidebar'
import AppViews from '../views/apps'
import PageHeader from '../components/layout-components/pageHeader'
import NavigationConfig from '../configs/navigation'
import { FaSignOutAlt, FaUser } from 'react-icons/fa'
import useWindowWidth from '../scripts/width'
import { MdSettings } from 'react-icons/md'

function AppLayout() {

    const [title, setTitle] = useState("Orders")

    const location = useLocation()

    useEffect(() => {
        const currentPage = NavigationConfig.filter(page => location.pathname === "/app" + page.path)
        if(currentPage.length) setTitle(currentPage[0].title)
        else setTitle("Not Found")
    }, [location])

    const width = useWindowWidth()
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        console.log(colorMode);
    }, [colorMode])

    return (
        <>
        <Flex>
            <Box width="100%">
                <PageHeader title={"1300 CDR Billing"} extras={<Flex px={4}>
                    <IconButton color="gray.500" variant={"ghost"}><MdSettings  size="24px"/></IconButton>                     
                    <IconButton color="gray.500" variant={"ghost"}><FaSignOutAlt/></IconButton>   
                </Flex>} />
                <Box px={4} pt={6}>
                    <Switch>
                        <Route path="" component={AppViews} />
                    </Switch>
                </Box>
            </Box>
        </Flex>
        </>
    )
}

export default withRouter(AppLayout)
