import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import { useLocation } from 'react-router'
import Logo from '../../Logo'
import Sidebar from './sidebar'

function MobileMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const location = useLocation()

    useEffect(() => {
        onClose()
    }, [location])

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay>
                <DrawerContent background="brand.900">
                    <DrawerCloseButton zIndex="popover" color="white" />
                    <Sidebar></Sidebar>
                </DrawerContent>
                </DrawerOverlay>
            </Drawer>
            <Button onClick={onOpen} variant="ghost" ><MdMenu size="24px" /></Button>
        </>
    )
}

export default MobileMenu
