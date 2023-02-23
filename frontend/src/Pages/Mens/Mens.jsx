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
  Select,
  Skeleton,
} from "@chakra-ui/react";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import styles from "./Mens.module.css";
import LoadingSkeleton from "../Skeleton/Skeleton";
import { Link, useParams } from "react-router-dom";

let CategoryObj = [
  {
    id: 1,
    name: "clothing",
  },
  {
    id: 2,
    name: "accessories",
  },
  {
    id: 3,
    name: "coat",
  },
  {
    id: 4,
    name: "shoes",
  },
  {
    id: 5,
    name: "pajama_pants",
  },
];

const Mens = () => {
  const [mensData, setMensData] = useState([]);
  // const [mensType, setMensType] = useState([]);
  const { target } = useParams();
  console.log(target);
  const [category, setCategory] = useState(target);
  const [selectedValue, setSelectedValue] = useState("");
  const [filter, setFilter] = useState(undefined);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState();
  const [order, setOrder] = useState();

  const Mensdatafetch = async () => {
    try {
      let data = await axios(`http://localhost:8080/${target}`, {
        params: {
          type: filter,
          _page: page,
          _limit: page && 10,
          _sort: sort,
          _order: order,
        },
      });
      return setMensData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLowtoHigh = () => {
    const sortfuncLow = mensData.sort((a, b) => {
      return a.price - b.price;
    });
    /* 
    --> so after the sorting of the data
        We are creating a array and in that new array
        we are spreading new sorted data into them ...
        then we are setting the updated array into that setState()
    */
    setMensData([...sortfuncLow]);
  };

  const handleHightoLow = () => {
    const sortfuncHigh = mensData.sort((a, b) => {
      return b.price - a.price;
    });
    setMensData([...sortfuncHigh]);
  };

  // /* Filter Function */
  const handleFilterData = async (ele) => {
    /* 
    --> so here if mensData's type of userclick element type is same
        so we are setting the data into that state
    */
    await Mensdatafetch();

    const filterdata = mensData;
    const CarTypeData = filterdata.filter(
      (el) => el.type === ele.target.innerText
    );
    console.log("filterdata", [...CarTypeData]);
    setMensData([...CarTypeData]);
  };

  useEffect(() => {
    Mensdatafetch();
  }, [filter, page, sort, order]);

  useEffect(() => {}, [mensData]);

  if (mensData.length === 0) {
    return <LoadingSkeleton />;
  } else
    return (
      <div>
        <Box w={"90%"} m="auto">
          <Box h={"4rem"}>
            <Flex justifyContent={"space-between"}>
              <Text fontWeight={"bold"} fontSize="28px">
                Men
              </Text>
              {CategoryObj.map((e, index) => {
                return (
                  <Button
                    key={index}
                    value={e.name}
                    onClick={(ele) => setFilter(e.name)}
                    _hover={{ backgroundColor: "fff" }}
                    bgColor={"white"}
                    cursor={"pointer"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight="bold"
                      color={"gray.500"}
                    >
                      {e.name}
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
                      ({mensData.length}items)
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
                            setSort("price");
                            setOrder("asc");
                          }}
                        >
                          Low to High
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            setSort("price");
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
          {mensData?.map((item, i) => (
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
                //   onClick={() => handleOnNextpage(item._id)}
              >
                <Image
                  className={styles.MensProductsImage}
                  h="320px"
                  w={"100%"}
                  src={item.imgUrl}
                  alt="img"
                  mt="2"
                />

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
                    <Text fontSize={"15px"} fontWeight={"600"}>
                      {item.name}
                    </Text>
                    <Box display={"flex"} justifyContent="flex-start" gap={2}>
                      <Text alignItems={"left"} fontSize={"15px"}>
                        ${item.price}
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

export default Mens;
