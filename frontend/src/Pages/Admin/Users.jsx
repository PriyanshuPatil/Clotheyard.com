import { Button,  GridItem, Select } from "@chakra-ui/react"
import { AdminSidebar } from "../../Components/Admin/AdminSidebar"
import { Box, Flex, Grid, Text, Heading, Stack } from "@chakra-ui/layout";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SingleAdminUser from "../../Components/Admin/SingleAdminUser";
const Users = () =>
{
    const [UsersData, setUsersData] = useState([]);
    const [page, setPage] = useState(1);
    const toast = useToast();
    const fetchUsersData = async () => {
      const DataIs = await axios
        .get(`https://dizzy-tuna-twill.cyclic.app/users`)
        .then((res) => {
          setUsersData(res.data);
        });
    };
    const DeleteUsersData = async (id) => {
      const DataIs = await axios
        .delete(`https://dizzy-tuna-twill.cyclic.app/users/${id}`)
        .then((res) => {
          toast({
            title: "Success",
            description: "User succesfully Deleted.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          fetchUsersData();
        });
    };
    const updateUserData = async (id, admin) => {
      console.log({
        admin: admin,id
      })
     await axios
        .patch(`https://dizzy-tuna-twill.cyclic.app/users/${id}`, {
          admin: admin,
        })
        .then((res) => {
          toast({
            title: "Success",
            description: "Users succesfully Updated.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          fetchUsersData();
        });
    };
    useEffect(() => {
      fetchUsersData();
    }, []);
  
  
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
              <Text fontSize={'3xl'} color='#3182CE' mt={5} ml={3} mb={5}>USERS</Text>
              </Box>
              <Box>
       <Box overflowX="auto" mt={20}>
        <TableContainer size="md">
          <Table variant="striped" colorScheme={'blue'}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>EMAIL</Th>
                <Th>NAME</Th>
                <Th>ADMIN</Th>
                <Th>EDIT</Th>
                <Th>DELETE</Th>
              </Tr>
            </Thead>
            <Tbody>
            {UsersData.map((el, i) => {
              const id = el._id;
              return (
                <SingleAdminUser
                  el={el}
                  i={i}
                  DeleteUsersData={DeleteUsersData}
                  updateUserData={updateUserData}
                />
              );
            })}
            </Tbody>
          </Table>
        </TableContainer>
        </Box>
       </Box>
             </GridItem>
         </Grid>
        </>
    )
}


export{Users}