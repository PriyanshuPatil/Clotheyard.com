import { Box, Button, Grid, GridItem, Select, Text } from "@chakra-ui/react"
import { useState } from "react"
import { AdminBar, AdminLine, AdminPie } from "../../Components/Admin/AdminBar"
import { UserData ,UserData2} from "../../Components/Admin/AdminData"
import { AdminSidebar } from "../../Components/Admin/AdminSidebar"
import {Chart as CharJS} from 'chart.js/auto'
const Dashboard = () =>
{
    const [userData,setUsersData] = useState({
        labels:UserData.map((el)=>el.year),
        datasets:[{
            label : "Total Sales",
            data:UserData.map((el)=>el.userGain)
        }]
    })
    const [userData2,setUsersData2] = useState({
        labels:UserData2.map((el)=>el.year),
        datasets:[{
            label : "Total Sales",
            data:UserData2.map((el)=>el.userGain)
        }]
    })
    return (
        <>
        <Grid gridTemplateColumns={'250px 1fr'}>
             <GridItem  w='100%' h='800' border={'1px'} borderColor={'gray.200'} p={5}>
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
              <Text fontSize={'3xl'} color='#3182CE' mt={5} ml={3} mb={5}>DASHBOARD</Text>
              </Box>
              <Box>
                <Box display={'flex'} mt='100px'>
                    <Box h={'350px'} width='50%' ml='40px'>
                    <Text fontSize={'xl'} textAlign='center' mb='5'>Current Week</Text>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                        <GridItem w='100%' h='160' border='1px' borderColor={'blue.200'} borderRadius={25} p={3}>
                        <Text textAlign={'center'} fontSize='xl' fontWeight={'bold'} color={'blue.400'}>Categories</Text>
                        <Box mt='5px' ml='5px'>
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Kids</li>
                            <li>Others</li>
                          </Box>
                        </GridItem>
                        <GridItem w='100%' h='160'border='1px' borderColor={'purple.200'} borderRadius={25} p={3}>
                        <Text textAlign={'center'} fontSize='xl' fontWeight={'bold'} color='purple.400'>Sales Stats</Text>
                        <Box mt='5px' ml='5px'>
                            <li>Mens : ₹14500</li>
                            <li>Womens : ₹7300</li>
                            <li>Kids : ₹5000</li>
                            <li>Others: ₹8000</li>
                          </Box>
                        </GridItem>
                        <GridItem w='100%' h='160' border='1px' borderColor={'green.300'} borderRadius={25} p={3}>
                        <Text textAlign={'center'} fontSize='xl' fontWeight={'bold'} color='green.400'>User & Admin Data</Text>
                        <Box mt='5px' ml='5px'>
                            <li>Active User : 45</li>
                            <li>Not Active Users : 24</li>
                            <li>Active Admins : 10</li>
                            <li>Not Active Admins : 2</li>
                          </Box>
                        </GridItem>
                        <GridItem w='100%' h='160' border='1px' borderColor={'red.200'} borderRadius={25} p={3}>
                        <Text textAlign={'center'} fontSize='xl' fontWeight={'bold'} color='red.400'>Order's Data</Text>
                          <Box mt='5px' ml='5px'>
                            <li>Delivered : 25</li>
                            <li>On the Way : 10</li>
                            <li>Pending : 15</li>
                            <li>Canceled : 3</li>
                          </Box>
                        </GridItem>
                    </Grid>                    </Box>
                    <Box h={'350px'} width='50%' p='0px 0px 0px 100px'>
                    <Text >Total Products</Text>
                    <AdminPie Data={userData}/>
                    </Box>
                </Box>
                <Box>
                <Grid  gridTemplateColumns={'1fr 300px'} gap={2} mt='10'>
                    <GridItem w='100%' >
                            <Box mt={5} width={'100%'}>
                                <Text fontSize={'xl'} textAlign='center'>Total Sales</Text>
                                <AdminBar Data={userData}/>
                           </Box>  
                    </GridItem>
                    <GridItem w='100%'>
                    <Text fontSize={'xl'} textAlign='center'>Weekly Sales</Text>
                            <Box mt={10} width={'100%'} >
                                <Text fontSize={'xl'} textAlign='center'>1st Week</Text>
                                <AdminLine Data={userData}/>
                           </Box> 
                           <Box mt={10} width={'100%'}>
                                <Text fontSize={'xl'} textAlign='center'>2nd Week</Text>
                                <AdminLine Data={userData2}/>
                           </Box> 
                    </GridItem>
                </Grid>
                </Box>
              </Box>
             </GridItem>
         </Grid>
        </>
    )
}


export{Dashboard}


// <Box width={'25%'}>
//                     
// </Box>
