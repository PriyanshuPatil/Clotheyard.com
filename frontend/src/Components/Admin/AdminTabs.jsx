import { Box, HStack, Text } from "@chakra-ui/react"
import { CiDeliveryTruck } from "react-icons/ci"
import { FaBoxOpen } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscGraph } from "react-icons/vsc"
import { Link } from "react-router-dom"


const AdminTabs = () =>
{
    return(
        <Box h='auto' mt='66px'>
                 <Link to='/admin/dashboard'><Box border={'1px'} borderColor={'gray.200'}  borderRadius={'10px'} h='auto' p='4' mt='20px'  display={'flex'} _hover={{ borderColor: "#3182CE", cursor: "Pointer" }}>
                  <HStack spacing={2}>
                  <VscGraph size={25} color='#C3C4C9'/>
                  <Text fontSize={'xl'}>Dashboard</Text>
                  </HStack>
                 </Box></Link>
                 <Link to='/admin/orders'><Box border={'1px'} borderColor={'gray.200'}  borderRadius={'10px'} h='auto' p='4' mt='20px'  display={'flex'} _hover={{ borderColor: "#3182CE", cursor: "Pointer" }}>
                  <HStack spacing={2}>
                  <CiDeliveryTruck size={25} color='#C3C4C9'/>
                  <Text fontSize={'xl'}>Orders</Text>
                  </HStack>
                 </Box></Link>
                 <Link to='/admin/products'><Box border={'1px'} borderColor={'gray.200'}  borderRadius={'10px'} h='auto' p='4' mt='20px'  display={'flex'} _hover={{ borderColor: "#3182CE", cursor: "Pointer" }}>
                  <HStack spacing={2}>
                  <FaBoxOpen size={25} color='#C3C4C9'/>
                  <Text fontSize={'xl'}>Products</Text>
                  </HStack>
                 </Box></Link>
                 <Link to='/admin/users'>
                 <Box border={'1px'} borderColor={'gray.200'}  borderRadius={'10px'} h='auto' p='4' mt='20px'  display={'flex'} _hover={{ borderColor: "#3182CE", cursor: "Pointer" }}>
                  <HStack spacing={4}>
                  <FiUsers size={25} color='#C3C4C9'/>
                  <Text fontSize={'xl'}>Users</Text>
                  </HStack>
                 </Box></Link>
                 </Box>
    )
}

export{AdminTabs}