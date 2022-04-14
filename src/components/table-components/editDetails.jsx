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
  ModalFooter,
  ButtonGroup,
  HStack,
  Input,
  VStack,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import { Field, Form, Formik, FormikProps } from 'formik';
import { FaLocationArrow, FaWeight } from 'react-icons/fa';
import { upsertCustomers } from '../../services/customers';
import * as Yup from 'yup';

const CustomerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(3, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  charges: Yup.object().shape({
    international: Yup.number().required("This field is required."),
    national: Yup.number().required("This field is required."),
    mobile: Yup.number().required("This field is required."),
  })
});

function EditDetails(props) {
  // const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box onClick={onOpen}>
        {props.children}
      </Box>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        {console.log(props.initials)}
        <ModalOverlay />
        <Formik
          initialValues={props.type === 'create' ? { email: '', name: '', address: '', charges: { mobile: '', national: '', international: '' }} :  props.initials}
          validationSchema={CustomerSchema}
          onSubmit={(values, actions) => {
            upsertCustomers(props.type, {number: props.number}, {number:props.number, ...values}).then(res => {
              if(res.data.type === 'Success'){
                onClose()
                if(props.onSuccess) props.onSuccess(res.data.status.code, values);
              }
            })
          }}
        >
          {(props) => (
            <Form>
              <ModalContent>
                <ModalCloseButton />
                <ModalBody p={12}>
                  <Heading>{props.type === 'create' ? 'Add' : 'Edit'} Details</Heading>
                  <Heading color="gray.400" mt={1} size="md">1300 567 8989</Heading>

                  <VStack alignItems={"start"} spacing={4} mt={6}>
                    <Heading size="sm" >Billing Details</Heading>
                    <Field name="name">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <Box width={"100%"}>
                          <Input placeholder='Name' {...field}></Input>
                          {meta.touched && meta.error && (
                            <Text color="red.400">{meta.error}</Text>
                          )}
                        </Box>
                      )}
                    </Field>
                    <Field name="email">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <Box width={"100%"}>
                          <Input placeholder='Email' {...field}></Input>
                          {meta.touched && meta.error && (
                            <Text color="red.400">{meta.error}</Text>
                          )}
                        </Box>
                      )}
                    </Field>
                    <Field name="address">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <Box width={"100%"}>
                          <Textarea placeholder='Address' {...field}></Textarea>
                          {meta.touched && meta.error && (
                            <Text color="red.400">{meta.error}</Text>
                          )}
                        </Box>
                      )}
                    </Field>
                    <Heading pt={4} size="sm">Charges</Heading>

                    <Field name="charges.international">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <Box width={"100%"}>
                          <HStack width={"100%"} justify={"space-between"}>
                            <Box>
                              <Text fontWeight={"700"}>International Calls</Text>
                              <Text>Cost Per Minute</Text>
                            </Box>
                            <NumberInput defaultValue={Number(field.value)}>
                              <NumberInputField {...field} />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </HStack>
                          {meta.touched && meta.error && (
                              <Text color="red.400">{meta.error}</Text>
                            )}
                        </Box>
                      )}
                    </Field>

                    <Field name="charges.national">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <Box width={"100%"}>
                          <HStack width={"100%"} justify={"space-between"}>
                            <Box>
                              <Text fontWeight={"700"}>National Calls</Text>
                              <Text>Cost Per Minute</Text>
                            </Box>
                            <NumberInput defaultValue={Number(field.value)}>
                              <NumberInputField {...field} />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </HStack>
                          {meta.touched && meta.error && (
                              <Text color="red.400">{meta.error}</Text>
                            )}
                        </Box>
                      )}
                    </Field>

                    <Field name="charges.mobile">
                      {({
                        field,
                        form: { touched, errors },
                        meta,
                      }) => (
                        <Box width={"100%"}>
                          <HStack width={"100%"} justify={"space-between"}>
                            <Box>
                              <Text fontWeight={"700"}>Mobile Calls</Text>
                              <Text>Cost Per Minute</Text>
                            </Box>
                            <NumberInput defaultValue={Number(field.value)}>
                              <NumberInputField {...field} />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </HStack>
                          {meta.touched && meta.error && (
                              <Text color="red.400">{meta.error}</Text>
                            )}
                        </Box>
                      )}
                    </Field>


                  </VStack>

                </ModalBody>
                <ModalFooter>
                  <ButtonGroup>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit" colorScheme={"brand"} >Save</Button>
                  </ButtonGroup>
                </ModalFooter>
              </ModalContent>
            </Form>)}
        </Formik>
      </Modal>
    </>
  )
}

export default EditDetails
