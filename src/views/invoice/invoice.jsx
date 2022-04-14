import {
    Box,
    Button,
    ButtonGroup,
    CloseButton,
    Container,
    Heading,
    Icon,
    IconButton,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react';
import {Link} from "react-router-dom";
import { FaArrowLeft, FaBackward, FaDownload, FaPaperPlane, FaPlane, FaTrash } from 'react-icons/fa'
import { Page, Text as Pr, View,Image, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
  

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#fff'
    },
    section: {
      margin: 10,
      padding: 28,
      width: "100%"
    },
    table: {
      width: '100%',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      borderTop: '1px solid #EEE',
      paddingTop: 8,
      paddingBottom: 8,
    },
    header: {
      borderTop: 'none',
    },
    bold: {
      fontWeight: 'bold',
    },
    // So Declarative and unDRY 👌
    row1: {
      width: '30%',
      fontSize: "10px"
    },
    row2: {
      width: '15%',
      fontSize: "10px"
    },
    row3: {
      width: '15%',
      fontSize: "10px"
    },
    row4: {
      width: '20%',
      fontSize: "10px"
    },
    row5: {
      width: '15%',
      fontSize: "10px"
    }
  });

  const MyDocument = ({invoice}) => (
    <Document>
      <Page size="A4" style={styles.page}>
      <View style={{position: "absolute", top: "320px", left: "32px", width: "212px"}}>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: 4, borderBottom: "1px solid #43d"}}>Usage Charges</Pr>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: 4,}}>International Calls</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>National Calls</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>Mobile Calls</Pr>
        </View>
        <View style={{position: "absolute", top: "320px", right: "32px", width: "80px"}}>
            <Pr style={{fontSize: "10px", marginTop: "8px",padding: 4, borderBottom: "1px solid #43d"}}>Ex-GST</Pr>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: 4,}}>$0.34</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>$0.56</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>$1.23</Pr>
        </View>
        <View style={{position: "absolute", top: "320px", right: "112px", width: "80px"}}>
            <Pr style={{fontSize: "10px", marginTop: "8px",padding: 4, borderBottom: "1px solid #43d"}}>Discount</Pr>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: 4,}}>20 min</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>15 min</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>10 min</Pr>
        </View>
        <View style={{position: "absolute", top: "320px", right: "192px", width: "80px", }}>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: 4, borderBottom: "1px solid #43d"}}>Duration</Pr>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: 4,}}>1:34:45</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>1:34:45</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>1:34:45</Pr>
        </View>
        <View style={{position: "absolute", top: "320px", right: "272px", width: "80px", }}>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: 4, borderBottom: "1px solid #43d"}}>Total Calls</Pr>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: 4,}}>1</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>5</Pr>
            <Pr style={{fontSize: "10px", marginTop: "0px", padding: 4,}}>8</Pr>
        </View>
        <View style={{position: "absolute", top: "460px", left: "32px", width: "452px"}}>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: "10px 4px", borderTop: "1px solid #444"}}>SubTotal</Pr>
            <Pr style={{fontSize: "10px", marginTop: "2px", padding: "8px 4px"}}>Discount</Pr>
            <Pr style={{fontSize: "10px", marginTop: "2px", padding: "8px 4px"}}>Grand Total</Pr>
        </View>
        <View style={{position: "absolute", top: "460px", right: "32px", width: "80px"}}>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: "10px 4px", borderTop: "1px solid #444"}}>$2.83</Pr>
            <Pr style={{fontSize: "10px", marginTop: "2px", padding: "8px 4px"}}>$0.75</Pr>
            <Pr style={{fontSize: "10px", marginTop: "2px", padding: "8px 4px"}}>$2.10</Pr>
        </View>
        <View style={styles.section}>
          <Image src="https://bgus.codbrix.com/assets/logo.png" style={{width: "128px", objectFit: "contain"}}></Image>
          <Pr style={{fontSize:"10px", marginTop: "32px"}}>FROM</Pr>
          <Pr style={{fontSize:"14px", marginTop: "4px"}}>BG Unified Solutions</Pr>
          <Pr style={{fontSize:"12px", marginTop: "2px"}}>cdr@bgunifiedsolutions.net</Pr>
          <Pr style={{fontSize:"12px", marginTop: "2px"}}>63 L Block, Sri Ganganagar</Pr>
          <Pr style={{fontSize:"12px", marginTop: "2px"}}>Rajasthan India</Pr>
        </View>
        <View style={styles.section}>
                <Pr style={{fontSize:"24px", marginTop: "0px", textAlign: "right"}}>Invoice#234</Pr>
                <Pr style={{fontSize:"12px", marginTop: "22px", textAlign: "right"}}>23 April 2022</Pr>
                <Pr style={{fontSize:"10px", marginTop: "32px", textAlign: "right"}}>BILL PERIOD</Pr>
                <Pr style={{fontSize:"14px", marginTop: "4px", textAlign: "right"}}>1 March 2022 - 31 March 2022</Pr>
                <Pr style={{fontSize:"10px", marginTop: "32px", textAlign: "right"}}>BILL TO</Pr>
                <Pr style={{fontSize:"14px", marginTop: "4px", textAlign: "right"}}>BG Unified Solutions</Pr>
                <Pr style={{fontSize:"12px", marginTop: "2px", textAlign: "right"}}>cdr@bgunifiedsolutions.net</Pr>
                <Pr style={{fontSize:"12px", marginTop: "2px", textAlign: "right"}}>63 L Block, Sri Ganganagar</Pr>
                <Pr style={{fontSize:"12px", marginTop: "2px", textAlign: "right"}}>Rajasthan India</Pr>
        </View>
  
        <View fixed style={{position: "absolute", bottom: "0px", right: "0px", width: "100%"}}>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: "10px 4px", backgroundColor: "#e50802", color: "white", textAlign:"center"}}>
              © Copyright 2022 BG Unified Solutions. All Rights Reserved
            </Pr>
        </View>
    
      </Page>
      <Page style={{padding: "32px"}}>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Pr style={styles.row1}>Destination</Pr>
            <Pr style={styles.row2}>Duration</Pr>
            <Pr style={styles.row3}>Type</Pr>
            <Pr style={styles.row4}>Date</Pr>
            <Pr style={styles.row5}>Cost</Pr>
          </View>
          <View key={1} style={[styles.row]} wrap={false}>
          <Pr style={styles.row1}>
            <Pr style={styles.bold}>13005678908</Pr>
          </Pr>
          <Pr style={styles.row2}>1:35</Pr>
          <Pr style={styles.row3}>{"International"}</Pr>
          <Pr style={styles.row4}>
            <Pr style={styles.bold}>{"29 Feb 2022"}</Pr>
          </Pr>
          <Pr style={styles.row5}>{"$3.25"}</Pr>
        </View>
          <View fixed style={{position: "absolute", bottom: "0px", left: "0px", right: "0px", width: "600px"}}>
            <Pr style={{fontSize: "10px", marginTop: "8px", padding: "10px 4px", backgroundColor: "#e50802", color: "white", textAlign:"center"}}>
              © Copyright 2022 BG Unified Solutions. All Rights Reserved
            </Pr>
        </View>
      </Page>
  
    </Document>
  );



  export const Invoice = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
      <Box height={"100vh"} bg="gray.200" width={"100%"} as="section" pb={{ base: '12', md: '24' }}>
        <Box  bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
            <Stack
                bg="white"
                p={2}
              direction={{ base: 'column', sm: 'row' }}
              justify="space-between"
              spacing={{ base: '3', md: '2' }}
            >
              <Stack
                spacing="4"
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'start', md: 'center' }}
              >
                <Link to="/app/billing/123">
                  <IconButton variant={"ghost"}>
                      <FaArrowLeft/>
                  </IconButton>
                </Link>
                <Stack
                  direction={{ base: 'column', md: 'row' }}
                  spacing={{ base: '0.5', md: '1.5' }}
                  pe={{ base: '4', sm: '0' }}
                >
                  <Text fontWeight="medium">Invoice#687</Text>
                </Stack>
              </Stack>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={{ base: '3', sm: '4' }}
                align={{ base: 'stretch', sm: 'center' }}
              >
                <Heading size="sm">Charges: </Heading>
                <ButtonGroup size='sm' isAttached variant='outline'>
                    <Button color="brand.500" mr='-px'><b>Excluded</b></Button>
                    <Button mr='-px'>Included</Button>
                </ButtonGroup>
                <ButtonGroup  px={2} spacing={2} variant='solid'>
                    <Button leftIcon={<FaDownload/>}>Download PDF</Button>
                    <Button color="red.500"><FaTrash/></Button>
                    <Button leftIcon={<FaPaperPlane/>} colorScheme={"brand"}>Send Email</Button>
                </ButtonGroup>
              </Stack>
            </Stack>
        </Box>
        <PDFViewer showToolbar={false} width={"100%"} style={{height: "calc(100vh - 56px)"}}>
            <MyDocument />
        </PDFViewer>
     
      </Box>
    )
  }

  export default Invoice;