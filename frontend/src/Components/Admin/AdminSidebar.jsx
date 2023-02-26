import { Box, Button, Heading, VStack } from "@chakra-ui/react"
import { AdminTabs } from "./AdminTabs"
import { Profile } from "./Profile"


const AdminSidebar = () =>
{
    return (
      <>
        <Box spacing={7} position='fixed'>
        <Heading  size='lg' color='#3182CE' textAlign='center'>ClOTHYARD's</Heading>
        <Profile />
        <AdminTabs />
        <VStack>
        <Button colorScheme='blue'width={'80%'} mt='12' size='md' >LOGOUT</Button>
        </VStack>
        </Box>
      </>
    )
}


export{AdminSidebar}