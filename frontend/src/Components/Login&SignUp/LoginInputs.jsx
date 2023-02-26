import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Button,
  Text,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../Redux/AuthReducer/auth.actions";

const LoginInputs = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { loading, error, token, isAuth } = useSelector(
    (state) => state.AuthManager
  );
  const toast = useToast();
  const dispatch = useDispatch();
  const handleClick = () => setShow(!show);
  const navigate=useNavigate()
  const handleLogin = async () => {
    await dispatch(logout());

    try {
      if (email && pass) {
        await dispatch(login({ email, password: pass }));
        if (token && isAuth) {
          toast({
            title: "Congratulations!!",
            description: "You have successfully logged in.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          navigate("/")
        } else {
          toast({
            title: "Oops!",
            description: "Provide the correct credentials",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Fields are empty",
          description: "Kindly Provide email and password",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Oops!",
        description: "Provide the correct credentials",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <Box>
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={10}
        m="auto"
        mt="80px"
        w="85%"
      >
        <GridItem w="100%">
          <Text>Email*</Text>
          <Input
            placeholder="Enter Your Email"
            //value='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </GridItem>
        <GridItem w="100%">
          <Text>Password*</Text>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              //value='pass'
              onChange={(e) => setPass(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text
            textAlign={"right"}
            mt="2"
            color={"#3182CE"}
            _hover={{ color: "#63B3ED", cursor: "Pointer" }}
          >
            Forgot Password ?
          </Text>
        </GridItem>
        <GridItem w="100%">
          {loading ? (
            <Button colorScheme="blue" width={"100%"} mt="8" size="md">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="sm"
              />
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              width={"100%"}
              mt="8"
              size="md"
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export { LoginInputs };
