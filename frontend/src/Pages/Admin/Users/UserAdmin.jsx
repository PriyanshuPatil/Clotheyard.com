import styles from "./UsersAdmin.module.css";
import { Box, Flex, Grid, Text, Heading, Stack } from "@chakra-ui/layout";
import {Select } from "@chakra-ui/react";
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
import SingleAdminUser from "./SingleUsersAdmin";
const UsersAdmin = () => {
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
    <Box
      w={"90%"}
      m={"auto"}
      border={"box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    >
      <Box overflowX="auto">
        <TableContainer size="md">
          <Table variant="striped">
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

            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export { UsersAdmin };
