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
import SingleAdminProduct from "../../Components/Admin/SingleAdminProduct";

const Products = () =>
{
    const [productData, setProductData] = useState([]);
    const [page, setPage] = useState(1);
    const toast = useToast();
    const fetchProductData = async () => {
      const DataIs = await axios
        .get(`https://dizzy-tuna-twill.cyclic.app/product?_limit=30`)
        .then((res) => {
          setProductData(res.data);
        });
    };
    const DeleteProductData = async (id) => {
      const DataIs = await axios
        .delete(`https://dizzy-tuna-twill.cyclic.app/product/${id}`)
        .then((res) => {
          toast({
            title: "Success",
            description: "Product succesfully Deleted.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          fetchProductData();
        });
    };
    const updateProductData = async (id, price) => {
      const DataIs = await axios
        .patch(`https://dizzy-tuna-twill.cyclic.app/product/${id}`, {
          discounted_price: price,
        })
        .then((res) => {
          toast({
            title: "Success",
            description: "Product succesfully Updated.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          fetchProductData();
        });
    };
    useEffect(() => {
      fetchProductData();
    }, []);
  
    const getFilterProduct = async (e) => {
      const query = e.target.value;
      if (query == "Popular") {
        const FilterData = await axios
          .get(
            `https://dizzy-tuna-twill.cyclic.app/product?category=${"Mens"}&_limit=30&sort=${"rating"}`
          )
          .then((res) => {
            setProductData(res.data);
          });
      } else {
        const FilterData = await axios
          .get(
            `https://dizzy-tuna-twill.cyclic.app/product?category=${query}&_limit=30`
          )
          .then((res) => {
            setProductData(res.data);
          });
      }
    };
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
              <Text fontSize={'3xl'} color='#3182CE' mt={5} ml={3} mb={5}>PRODUCTS</Text>
              </Box>
              <Box
      border={"box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    >
      <Box mt={20}>
        <Flex justifyContent={"space-between"} p={"20px 10px"}>
          <Box >
            <Select
              onChange={(e) => {
                getFilterProduct(e);
              }}
            //   p={{ base: "0px", md: "2px", lg: "3px" }}
            //   fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            >
              <option value="Popular">Popular</option>
              <option value="Mens">Mens</option>
              <option value="Womens">Womens</option>
              <option value="Child">Child</option>
            </Select>
          </Box>
        </Flex>
      </Box>
      <Box >
        <TableContainer size="md">
          <Table variant="striped" colorScheme='blue'>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>IMAGE</Th>
                <Th>BRAND</Th>
                <Th>NAME</Th>
                <Th isNumeric>PRICE</Th>
                <Th>EDIT</Th>
                <Th>DELETE</Th>
              </Tr>
            </Thead>
            {productData.map((el, i) => {
              const id = el._id;
              return (
                <SingleAdminProduct
                  el={el}
                  i={i}
                  DeleteProductData={DeleteProductData}
                  updateProductData={updateProductData}
                />
              );
            })}

            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
             </GridItem>
         </Grid>
        </>
    )
}


export{Products}