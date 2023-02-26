import { Box, Button, Grid, GridItem, Select, Text } from "@chakra-ui/react"
import { AdminSidebar } from "../../Components/Admin/AdminSidebar"
const Dashboard = () =>
{
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
             </GridItem>
         </Grid>
        </>
    )
}


export{Dashboard}