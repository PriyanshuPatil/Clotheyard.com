import { Box, Button, Grid, GridItem, Select, Text } from "@chakra-ui/react"
import { AdminSidebar } from "../../Components/Admin/AdminSidebar"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { AdminRow } from "../../Components/Admin/AdminRows"
const Orders = () =>
{
    return (
        <>
        <Grid gridTemplateColumns={'250px 1fr'}>
             <GridItem  w='100%' h='auto' border={'1px'} borderColor={'gray.200'} p={5}>
              <AdminSidebar />
             </GridItem>
             <GridItem 
              w='100%' 
              h='auto'
            //   border={'1px'} 
            //   borderColor={'gray.500'}
              >
              <Box
              border={'1px'} 
              borderColor={'gray.200'}   
              position={'fixed'}
              bgColor='white'
              width={'81.5%'}
              zIndex={1}          
              >
              <Text fontSize={'3xl'} color='#3182CE' mt={5} ml={3} mb={5}>ORDERS</Text>
              </Box>
             <TableContainer mt={'80px'}>
             <Table variant='striped' colorScheme='blue'>
                <TableCaption>Order History</TableCaption>
                <Thead h='80px'>
                <Tr>
                    <Th>SR.NO</Th>
                    <Th>DATE</Th>
                    <Th>UserID</Th>
                    <Th>NO.OF ITEMS</Th>
                    <Th>TOTAL VALUE</Th>
                    <Th>DETAILS</Th>
                    <Th>STATUS</Th>
                </Tr>
                </Thead>
                <Tbody>
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                 <AdminRow />
                </Tbody>
                <Tfoot>
                     
                </Tfoot>
            </Table>
             </TableContainer>
             </GridItem>
         </Grid>
     </>
    )
}


export{Orders}