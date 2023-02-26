import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  Box,
  Text,
  Grid,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import styles from "./ProductsPage.module.css";
import LoadingSkeleton from "../Skeleton/Skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductReducer/Product.actions";


const MensCat=[
  {
    id: 1,
    name: "tshirt",
    title:"Tshirt"
  },
  {
    id: 2,
    name: "shirt",
    title:"Shirt"
  },
  {
    id: 3,
    name: "pants",
    title:"Pants"
  },
  {
    id: 4,
    name: "jacket",
    title:"Jacket"
  }
];

let WonensObj = [
  {
    id: 1,
    name: "kurta",
    title:"Kurta"
  },
  {
    id: 2,
    name: "kurta with dupatta",
    title:"Kurta With Dupatta"
  },
  {
    id: 3,
    name: "pants",
    title:"Pants"
  }
];

const ProductsPage = () => {
  const { target } = useParams();
  const [filter, setFilter] = useState(undefined);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState();
  const [order, setOrder] = useState();
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.ProductManager
  );
const CategoryObj= target == "Womens" ? WonensObj : MensCat ;
  const ProductsPagedatafetch = async () => {
    dispatch(getProducts({ category: target,type:filter, page, sort, order }));
  };

  useEffect(() => {
    ProductsPagedatafetch();
  }, [filter, page, sort, order, target]);

  console.log(products);

  if (loading) {
    return <LoadingSkeleton />;
  } else
    return (
      <div>
        <Box w={"90%"} m="auto">
          <Box h={"4rem"}>
            <Flex justifyContent={"space-between"}>
              <Text fontWeight={"bold"} fontSize="28px">
                {target == "Womens" ? "Women" : target == "Mens" ?"Mens": "Child"}
              </Text>
              {

              CategoryObj.map((e, index) => {
                return (
                  <Button
                    key={index}
                    value={e.name}
                    onClick={() => setFilter(e.name)}
                    _hover={{ backgroundColor: "fff" }}
                    bgColor={"white"}
                    cursor={"pointer"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={"gray.500"}
                    >
                      {e.title}
                    </Text>
                  </Button>
                  
                );
              })}
            </Flex>
          </Box>
          <hr />
          <Flex flexDirection={"row"} justifyContent="space-between">
            <Box w="100%">
              <Flex justifyContent={"space-between"} gap={4}>
                <Flex>
                  <Box textAlign={"center"}>
                    <Heading
                      fontWeight={"500"}
                      fontSize={"15px"}
                      paddingTop={2}
                      style={{ color: "#828282" }}
                    >
                      ({products.length}items)
                    </Heading>
                  </Box>
                </Flex>

                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Button}
                        w={"fit-content"}
                        border={"2px solid black"}
                        bgColor="white"
                        color={"black"}
                        borderRadius={"18px"}
                        isActive={isOpen}
                        rightIcon={<HiOutlineArrowsUpDown color="black" />}
                      >
                        {isOpen ? "Order" : "SortBy"}
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                          onClick={() => {
                            setSort(undefined);
                            setOrder(undefined);
                          }}
                        >
                          Default
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            setSort("discounted_price");
                            setOrder("asc");
                          }}
                        >
                          Low to High
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            setSort("discounted_price");
                            setOrder("desc");
                          }}
                        >
                          High to low
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={1}
          mt={0}
          w={"92%"}
          m="auto"
        >
          {products?.map((item, i) => (
            <Link key={i} to={`/singlepage/${item._id}`}>
              <Box
                className="imagecontainer"
                w="90%"
                m="auto"
                align={"center"}
                key={i}
                bgColor="white"
                mt={4}
                cursor={"pointer"}
              >
                <div className={styles.flipcard}>
                  <div className={styles.flipcardinner}>
                    <div className={styles.flipcardfront}>
                      <Image
                        className={styles.ProductsPageProductsImage}
                        h="320px"
                        w={"100%"}
                        src={item.images[0]}
                        alt="img"
                        mt="2"
                      />
                    </div>
                    <div className={styles.flipcardback}>
                      <Image
                        className={styles.ProductsPageProductsImage}
                        h="320px"
                        w={"100%"}
                        src={item.images[3]}
                        alt="img"
                        mt="2"
                      />
                    </div>
                  </div>
                </div>
                <Box display={"flex"} justifyContent="space-between" mt={2}>
                  <Text color={"#cc1632"} fontWeight="bold">
                    New !
                  </Text>
                  <Box
                    cursor={"pointer"}
                    className={styles.CartSmallBox}
                    _hover={{ backgroundColor: "#005EB8" }}
                    borderRadius={"18%"}
                    w="10%"
                    h="22px"
                    align="center"
                    mr={2}
                  >
                    <AiOutlineShopping className={styles.AiOutlineShopping} />
                  </Box>
                </Box>
                <Box>
                  <Box textAlign={"left"}>
                    <Text fontSize={"17px"} fontWeight={"700"}>
                      {item.title}
                    </Text>
                    <Text fontSize={"15px"} fontWeight={"600"}>
                      {item.subtitle}
                    </Text>
                    <Box display={"flex"} justifyContent="flex-start" gap={2}>
                      <Text alignItems={"left"} fontSize={"15px"}>
                        ${item.discounted_price}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Grid>
      </div>
    );
};

export default ProductsPage;
