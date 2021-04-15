import { Box, Center, Flex } from '@chakra-ui/layout'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Route, Switch, useLocation, withRouter } from 'react-router'
import {
    Stat,
    StatLabel,
    StatNumber,
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuItem,
    MenuDivider,
    useColorMode,
  } from "@chakra-ui/react"
import MobileMenu from '../components/layout-components/mobileMenu'
import Sidebar from '../components/layout-components/sidebar'
import AppViews from '../views/apps'
import PageHeader from '../components/layout-components/pageHeader'
import NavigationConfig from '../configs/navigation'
import { FaUser } from 'react-icons/fa'

function useWindowWidth() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

function AppLayout({history}) {

    const [title, setTitle] = useState("Orders")

    const location = useLocation()

    useEffect(() => {
        const currentPage = NavigationConfig.filter(page => location.pathname === "/app" + page.path)
        if(currentPage.length) setTitle(currentPage[0].title)
        else setTitle("Not Found")
    }, [location])

    const width = useWindowWidth()
    const [, toggleColorMode ] = useColorMode()

    return (
        <>
        {width < 992 && <MobileMenu />}
        <Flex>
            {width > 992 && <Box height="100vh" minWidth="280px" width="280px" pos="fixed">
                    <Sidebar/>
            </Box>}
            <Box pl={["0px","0px","0px","280px"]} width="100%">
                <PageHeader title={title} extras={<Flex>
                    <Stat px={8} py={2} borderLeftWidth={1}>
                        <StatLabel>My Earnings</StatLabel>
                        <StatNumber>Rs.15,300.00</StatNumber>
                    </Stat>
                    <Stat px={8} py={2} borderLeftWidth={1}>
                        <StatLabel>Shipping Wallet</StatLabel>
                        <StatNumber>Rs.4,380.00</StatNumber>
                    </Stat>
                    <Menu>
                        <MenuButton borderLeftWidth={1} m={0} p={0} _hover={{background: "#88888811"}}>
                            <Center cursor="pointer" px={4}>
                                <Center p={3} bgGradient={"linear-gradient(-45deg, rgba(33,23,212,1) 0%, rgba(126,147,228,1) 100%)"} color="white" rounded="50%">
                                    <FaUser></FaUser>
                                </Center>
                            </Center>
                        </MenuButton>
                        <MenuList mr={4}>
                            <MenuGroup title="Profile">
                                <MenuItem>My Account</MenuItem>
                                <MenuItem>Payments </MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Help">
                                <MenuItem>Docs</MenuItem>
                                <MenuItem>FAQ</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup>
                                <MenuItem onClick={toggleColorMode}>Toggle Color Mode</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                    
                </Flex>} />
                <Box>
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
