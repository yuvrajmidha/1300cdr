import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading,
    Flex,
    Box,
    Text,
    Divider,
  } from "@chakra-ui/react"
import { FaLocationArrow, FaWeight } from 'react-icons/fa';

const shipment_track_activities = [
    {
        date: "2019-08-01 05:20:55",
        activity: "Shipment information sent to FedEx - OC",
        location: "NA"
    },
    {
        date: "2019-08-01 05:20:55",
        activity: "Shipment information sent to FedEx - OC",
        location: "NA"
    },
    {
        date: "2019-08-01 05:20:55",
        activity: "Shipment information sent to FedEx - OC",
        location: "NA"
    },
]

function OrderTrack(props) {
    // const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button colorScheme="brand" w="100%" onClick={onOpen}>Track Order</Button>
  
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody p={12}> 
                <Heading>Pick Up Generated</Heading>
                <Box my={6}>
                    <Flex justifyContent="flex-start" alignItems="center" py={2}>
                        <FaLocationArrow></FaLocationArrow>
                        <Text mx={2}><b>Desitnation:</b></Text>
                        New Delhi
                    </Flex>
                    <Flex justifyContent="flex-start" alignItems="center" py={2}>
                        <FaWeight />
                        <Text mx={2}><b>Weight:</b></Text>
                        2.5kg
                    </Flex>
                </Box>
                <Divider></Divider>
                {shipment_track_activities.map(activity => <Box py={3} borderBottomWidth={1}>
                    <Text color="purple.400" fontWeight="bold">{activity.date}</Text>
                    <Heading size="md" mt={2}>{activity.activity}</Heading>
                </Box> )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default OrderTrack
