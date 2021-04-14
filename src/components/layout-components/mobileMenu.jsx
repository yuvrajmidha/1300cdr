import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import Logo from '../../Logo'

function MobileMenu() {
    return (
        <Flex height="64px" justifyContent="space-between" alignItems="center" px={4}>
            <Button variant="ghost" ><MdMenu size="24px" /></Button>
            <Logo height={6}></Logo>
            <Button variant="ghost"><FaMoon size="24px" /></Button>
        </Flex>
    )
}

export default MobileMenu
