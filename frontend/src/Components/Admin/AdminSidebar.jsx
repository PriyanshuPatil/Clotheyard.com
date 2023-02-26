import { Box, Button, Heading, useToast, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { AdminTabs } from "./AdminTabs"
import { Profile } from "./Profile"


const AdminSidebar = () =>
{const toast = useToast();
  const navigate=useNavigate()
    return (
      <>
        <Box spacing={7} position='fixed'>
        <Heading  size='lg' color='#3182CE' textAlign='center'>ClOTHYARD's</Heading>
        <Profile />
        <AdminTabs />
        <VStack>
        <Button onClick={()=>{navigate("/");localStorage.removeItem("token");toast({
            title: "Congratulations!!",
            description: "You have successfully logged Out.",
            status: "success",
            duration: 4000,
            isClosable: true,
          }); }} colorScheme='blue'width={'80%'} mt='12' size='md' >LOGOUT</Button>
        </VStack>
        </Box>
      </>
    )
}


export{AdminSidebar}