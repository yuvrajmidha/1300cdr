import React, { useState } from 'react'
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
    ModalFooter,
    ButtonGroup,
    HStack,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    VStack,
    Image,
  } from "@chakra-ui/react"
  import { Field, Form, Formik, FormikProps } from 'formik';
  import * as Yup from 'yup';
import { createInvoice } from '../../services/invoices';
import { useHistory } from 'react-router-dom';
  
  const invoiceSchema = Yup.object().shape({
    start_date: Yup.date()
      .required('Required'),
    end_date: Yup.date()
      .required('Required'),
    free_minutes: Yup.object().shape({
      international: Yup.number(),
      national: Yup.number(),
      mobile: Yup.number(),
    })
  });

function GenerateInvoice(props) {
    // const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

    const [generating, setGenerate] = useState(false);
    let history = useHistory();

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button colorScheme="brand" onClick={onOpen}>Generate Invoice</Button>
  
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          {generating ? <ModalContent>
            <ModalBody>
            <VStack py={20}>
               <iframe src="https://embed.lottiefiles.com/animation/84315"></iframe>
               <Heading size="md">Generating Invoice...</Heading>
            </VStack>
            </ModalBody>
          </ModalContent> : <Formik
          initialValues={{start_date: 0, end_date: 0, free_minutes: {international: 0, national: 0, mobile: 0}}}
          validationSchema={invoiceSchema}
          onSubmit={(values, actions) => {
            setGenerate(true);
            createInvoice(values, props.data.number).then(res => {
              console.log(res.data.data);
              history.push("/invoice");
            })
          }}
        >
          {(props) => (
            <Form>
          <ModalContent>
            <ModalCloseButton />
            <ModalBody p={12}> 
                <Heading>Generate Invoice</Heading>
                <Heading color="gray.400" mt={1} size="md">1300 567 8989</Heading>
                <Text mt={6} mb={2}>Enter a date range.</Text>
                <HStack spacing={4}>
                    <Field name="start_date">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <Box>
                          <Input type="date" w={"192px"} {...field}></Input>
                          {meta.touched && meta.error && (
                            <Text color="red.400">{meta.error}</Text>
                          )}
                        </Box>
                      )}
                    </Field>
                    <Text>to</Text>
                    <Field name="end_date">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <Box>
                          <Input type="date" w={"192px"}  {...field}></Input>
                          {meta.touched && meta.error && (
                            <Text color="red.400">{meta.error}</Text>
                          )}
                        </Box>
                      )}
                    </Field>
                </HStack>
                <Heading pt={8} size="md">Discount</Heading>
                <Text>Give Free Minutes to Customers depending on type of call</Text>
                <HStack mt={4}>
                  <Field name="free_minutes.international">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <VStack align={"start"} width={"100%"} justify={"space-between"}>
                           <Text>International</Text>
                            <NumberInput defaultValue={Number(field.value)}>
                              <NumberInputField {...field} />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          {meta.touched && meta.error && (
                              <Text color="red.400">{meta.error}</Text>
                            )}
                            </VStack>
                      )}
                    </Field>
                    <Field name="free_minutes.national">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <VStack align={"start"} width={"100%"} justify={"space-between"}>
                           <Text>National</Text>
                            <NumberInput defaultValue={Number(field.value)}>
                              <NumberInputField {...field} />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          {meta.touched && meta.error && (
                              <Text color="red.400">{meta.error}</Text>
                            )}
                            </VStack>
                      )}
                    </Field>
                    <Field name="free_minutes.mobile">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <VStack align={"start"} width={"100%"} justify={"space-between"}>
                           <Text>Mobile</Text>
                            <NumberInput defaultValue={Number(field.value)}>
                              <NumberInputField {...field} />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          {meta.touched && meta.error && (
                              <Text color="red.400">{meta.error}</Text>
                            )}
                            </VStack>
                      )}
                    </Field>
                </HStack>
            </ModalBody>
            <ModalFooter>
                <ButtonGroup>
                <Button type="submit" colorScheme={"brand"} >Generate</Button>
                <Button onClick={onClose}>Cancel</Button>
                </ButtonGroup>
            </ModalFooter>
          </ModalContent>
          </Form>)}
          </Formik>}
        </Modal>
      </>
    )
}

export default GenerateInvoice
