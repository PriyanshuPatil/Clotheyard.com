import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import "./cart.css";
import { CardItem } from "../../Components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from "../../Redux/CartReducer/cart.actions";
import { addOrders } from "../../Redux/OrderReducer/Orders.actions";
import { useNavigate } from "react-router";

let allsum = 0;

export const Cart = () => {
  const { cartItems, loading } = useSelector((state) => state.CartManager);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.AuthManager);
  const toast = useToast();
  const [change, setChange] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setChange(!change);
  };
  let tax = (allsum * 5) / 100;

  const getData = () => {
    dispatch(getCartItems(token));
  };

  const handleDelete = (_id) => {
    dispatch(deleteCartItem({ token, _id, handleChange }));
    toast({
      title: "Item Removed",
      description: "Item has been successfully removed from the cart.",
      duration: 4000,
      status: "info",
      isClosable: true,
      position: "top",
    });
  };

  const handleUpdate = (_id, payload) => {
    dispatch(updateCartItem({ token, _id, payload, handleChange }));
  };

  const clearCartItems = () => {
    dispatch(clearCart({ token, navigate }));
  };

  const handlePlaceOrder = () => {
    let date = Date(Date.now());
    let arr = [];
    cartItems.forEach((item) => {
      arr.push(item._id);
    });
    // console.log(arr);
    let payload = {
      booking_date: date,
      products: arr,
    };
    dispatch(addOrders({ token, payload, clearCartItems }));
  };
  useEffect(() => {
    getData();
  }, [change]);

  let subtotal = 0;
  cartItems.forEach((item) => {
    subtotal += item.quantity * item.product.discounted_price;
  });

  if (loading) {
    return (
      <Box m={"auto"} w={"fit-content"} pt={"30px"}>
        <Spinner />
      </Box>
    );
  }
  return (
    <Box w="80%" margin={"auto"} mt={"20px"}>
      <Flex gap={"10px"}>
        <Heading size={"md"}>Shopping Bag </Heading>
        <Text> {cartItems.length} Items</Text>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "2fr 1fr" }}
        justifyContent={"space-between"}
        gap={"50px"}
        mt={"50px"}
      >
        <Box>
          {cartItems.map((el, i) => (
            <CardItem
              e={el}
              key={el._id}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </Box>
        <Box className="header" marginTop={"30px"}>
          <Box bg="#f7f7f7" padding={"20px"}>
            <Grid gap={"20px"}>
              <Heading size={"md"}>ORDER SUMMARY</Heading>
              <Box>
                <Flex justifyContent={"space-between"}>
                  <Text>Subtotal</Text>
                  <Text>
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(subtotal)}
                    /-
                  </Text>
                </Flex>
              </Box>

              <Box>
                <Flex justifyContent={"space-between"}>
                  <Text>Shipping Economy Ground</Text>
                  <Text>
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(90)}
                    /-
                  </Text>
                </Flex>
              </Box>

              <Box>
                <Flex justifyContent={"space-between"}>
                  <Text>Sales Tax</Text>
                  <Text>{tax}/-</Text>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent={"space-between"}>
                  <Text>Estimated Total</Text>
                  <Text>
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(subtotal + 90)}
                    /-
                  </Text>
                </Flex>
              </Box>
              <Flex alignItems="center" justifyContent={"center"}>
                <Button
                  size={"lg"}
                  bg="#1e3352"
                  w="80%"
                  color={"white"}
                  onClick={() => handlePlaceOrder()}
                >
                  CHECKOUT
                </Button>
              </Flex>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
