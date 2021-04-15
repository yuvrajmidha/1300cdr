import { Button } from '@chakra-ui/button';
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
  } from "@chakra-ui/react"

function TableObjectRenderer(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    var finalObject = []

    if(props.display === "accordion"){
        props.value.forEach(element => {
            var obj = []
            props.fields.forEach(item => {
                obj.push([item, element[item]])
            })
            finalObject.push(obj)
        })
        console.log(finalObject);
    }
    else if(props.display === "table"){
    }
    else {
        props.fields.forEach(item => {
            finalObject.push([item, props.value[item]])
        })
    }

    return (
        <>
            <Button variant="ghost" py={7} w="100%" justifyContent="flex-start" onClick = {onOpen}>
                {props.display === "accordion" ? (props.showFirstName ? finalObject[0][0][1] + (!(finalObject.length - 1) ? "" : " + " + (finalObject.length - 1) + " more item" + (finalObject.length > 1 ? "s": "")) : finalObject.length + " item" + (finalObject.length > 1 ? "s": "")) : finalObject[0][1]}
            </Button>
            <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{props.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody mb={4}>
                {(props.display !== "accordion" || props.display !== "table") && finalObject.map((item, index) => typeof item[1] === 'string' && <Flex key={index} py={3} borderTopWidth={1}>
                  <Text textTransform="capitalize" fontWeight={600} width="300px" px={2} py={1}>{item[0].replace(/_/g, " ")}</Text>
                  <Text px={2} py={1}>{item[1]}</Text>
                </Flex>)}
                {props.display === "accordion" && <Accordion defaultIndex={0} allowMultiple={true} borderWidth={0}>
                    {finalObject.map(table => <AccordionItem borderWidth={0}>
                        <h2>
                            <AccordionButton p={4} rounded={8}>
                                <Box flex={1} textAlign="left">
                                    {table[0][1]}
                                </Box>
                                <AccordionIcon></AccordionIcon>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel borderWidth={0}>
                            {table.map((item, index) => <Flex key={index} py={3} borderTopWidth={1}>
                                <Text textTransform="capitalize" fontWeight={600} width="300px" px={2} py={1}>{item[0].replace(/_/g, " ")}</Text>
                                <Text px={2} py={1}>{item[1]}</Text>
                            </Flex>)}
                        </AccordionPanel>
                    </AccordionItem>)}
                    </Accordion>}
                </ModalBody>   
            </ModalContent>
            </Modal>
            
        </>
    )
}

export default TableObjectRenderer