import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, Heading } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import useWindowWidth from '../../scripts/width'
import MobileMenu from './mobileMenu'

function PageHeader(props) {

    const width = useWindowWidth()    

    return (
        <Flex width="100%" minHeight="73px" maxHeight="76px" position="-webkit-sticky" pos="sticky" top={0} bg={useColorModeValue("white", "gray.900")} zIndex="sticky" borderBottomWidth={1} alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" py={4} px={4}>
                {/* {props.back ? <Link to={props.back}><Button variant="ghost" mr={2} ><FaArrowLeft></FaArrowLeft></Button></Link> : (width < 992 && <MobileMenu></MobileMenu>)} */}
                <Image src="https://bgus.codbrix.com/assets/logo.png" height="40px" objectFit="contain" ></Image>
                {/* <Heading size="md">{props.title}</Heading> */}
            </Flex>
            {props.extras}
        </Flex>
    )
}

export default PageHeader
