import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../Redux/ProductReducer/Product.actions";
import { addCartItems } from "../../Redux/CartReducer/cart.actions";

//https://vercel-deploy-jade-one.vercel.app/
export const Singlepage = () => {
  const toast = useToast();
  const [size, setsize] = useState("");
  const { singleProduct, loading } = useSelector(
    (state) => state.ProductManager
  );
  const { isAuth, token } = useSelector((state) => state.AuthManager);

  const dispatch = useDispatch();
  const { _id } = useParams();

  const handleAddToCart = () => {
    if (isAuth && token) {
      let payload = {
        size,
        product: _id,
      };
      dispatch(addCartItems({ token, payload }));
      toast({
        title: "Congratulations!",
        description: "This Product has been successfully added to cart",
        duration: 4000,
        status: "success",
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Login Required!",
        description: "Kindly Login to your account to further",
        duration: 4000,
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    dispatch(getSingleProduct(_id));
  }, [dispatch, _id]);

  console.log(singleProduct, loading);

  if (loading) {
    return <Spinner />;
  }
  return (
    singleProduct && (
      <Box w="80%" margin={"auto"}>
        <Flex columns={{ lg: 2, md: 2, sm: 1 }}>
          <Box w="70%">
            <SimpleGrid gap="10px" columns={{ lg: 2, md: 2, sm: 1 }}>
              <img width={"100%"} src={singleProduct.images[0]} alt="imagesd" />
              <img width={"100%"} src={singleProduct.images[1]} alt="imagesd" />
              <img width={"100%"} src={singleProduct.images[2]} alt="imagesd" />
              <img width={"100%"} src={singleProduct.images[3]} alt="imagesd" />
            </SimpleGrid>
          </Box>
          <Box w="30%" paddingTop="30px" paddingLeft={"30px"}>
            <Box position="sticky" right={"20px"} top="100px">
              <Text color={"red"} fontSize="18px">
                New!
              </Text>
              <Heading size={"lg"}>{singleProduct.title}</Heading>
              <Heading size={"md"}>{singleProduct.subtitle}</Heading>
              <Heading size={"md"} marginTop="30px">
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(singleProduct.discounted_price)}
                /-
              </Heading>
              <Heading size={"sm"} marginTop="10px" color={"gray"}>
                <s>
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(singleProduct.strike_price)}
                  /-
                </s>
              </Heading>

              {/* <Text size={'md'}>{singleProduct.discount}</Text> */}

              <Box marginTop="30px">
                <Text size={"sl"}>Size:Select Size</Text>
                <Flex gap="10px" mt={"10px"}>
                  {singleProduct.size.map((item) => {
                    return (
                      <Button
                        key={item}
                        border={size === item && "2px solid black"}
                        onClick={() => setsize(item)}
                      >
                        {item}
                      </Button>
                    );
                  })}
                </Flex>
              </Box>
              <Center pt={"20px"}>
                <Button
                  onClick={() => {
                    handleAddToCart();
                  }}
                  size="lg"
                  disabled={!size}
                  colorScheme={"green"}
                >
                  {size ? "Add To Bag" : "Please Select a Size"}
                </Button>
              </Center>
              <Text marginTop="30px" size={"sl"}>
                4 interest-free payments of $3.12 with Klarna. Learn More
              </Text>
            </Box>
          </Box>
        </Flex>

        <Box marginLeft={"20px"}>
          <Text>
            {singleProduct.subtitle} {singleProduct.category}{" "}
            {singleProduct.type}
          </Text>

          <Heading marginTop={"30px"} size={"sl"}>
            Details
          </Heading>
          <ul>
            <li>{singleProduct.subtitle}</li>
            <li>{singleProduct.title}</li>
            <li>{singleProduct.type}</li>
            <li>{singleProduct.category}</li>
            <li>{singleProduct.discount}</li>
          </ul>
          <Heading marginTop={"30px"} size={"sl"}>
            Fit
          </Heading>
          <ul>
            <li>{singleProduct.subtitle}</li>
            <li>{singleProduct.title}</li>
            <li>{singleProduct.type}</li>
            <li>Approx. length (M): 16.25"</li>
            <li>Model height: 5'10" | Wear size: Small</li>
          </ul>
          <Heading marginTop={"30px"} size={"sl"}>
            Care & Materials
          </Heading>
          <ul>
            <li>94% cotton, 6% spandex</li>
            <li>Machine wash/dry</li>
          </ul>
        </Box>
      </Box>
    )
  );
};
