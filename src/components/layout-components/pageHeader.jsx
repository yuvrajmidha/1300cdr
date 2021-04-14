import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link} from 'react-router-dom'

function PageHeader(props) {

    

    return (
        <Flex width="100%" position="-webkit-sticky" pos="sticky" top={0} bg={useColorModeValue("white", "gray.900")} zIndex="sticky" borderBottomWidth={1} alignItems="center" justifyContent="space-between">
            <Flex alignItems="center" p={4}>
                {props.back && <Link to={props.back}><Button variant="ghost" mr={2} ><FaArrowLeft></FaArrowLeft></Button></Link>}
                <Heading size="md">{props.title}</Heading>
            </Flex>
            {props.extras}
        </Flex>
    )
}

export default PageHeader