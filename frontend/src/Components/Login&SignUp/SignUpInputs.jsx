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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/AuthReducer/auth.actions";

const SignupInputs = () => {
  const [show, setShow] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setlast] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setdob] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handelSignUp = () => {
    if (first && last && email && pass && phone && dob) {
      //Backend Login will be here
      try {
        dispatch(
          registerUser({
            first_name: first,
            last_name: last,
            phone_number: phone,
            date_of_birth: dob,
            email: email,
            password: pass,
          })
        );

        toast({
          title: "User Successfully Registered",
          description: "Yaahoooo!",
          duration: 4000,
          status: "success",
          isClosable: true,
        });
        navigate("/login")
      } catch (error) {
        toast({
          title: "Invalid Credentials",
          description: "Please Provide correct details",
          duration: 4000,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Invalid Credentials",
        description: "Please Provide correct details",
        duration: 4000,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <Box>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap={10}
        m="auto"
        mt="50px"
        w="85%"
      >
        <GridItem w="100%">
          <Text>FirstName*</Text>
          <Input
            placeholder="Enter FirstName"
            onChange={(e) => setFirst(e.target.value)}
          />
        </GridItem>
        <GridItem w="100%">
          <Text>LastName*</Text>
          <Input
            placeholder="Enter LastName"
            onChange={(e) => setlast(e.target.value)}
          />
        </GridItem>
        <GridItem w="100%">
          <Text>Phone Number*</Text>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
        </GridItem>
        <GridItem w="100%">
          <Text>Date of Birth*</Text>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            onChange={(e) => setdob(e.target.value)}
          />
        </GridItem>
        <GridItem w="100%">
          <Text>Email*</Text>
          <Input
            placeholder="Enter Email"
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
              onChange={(e) => setPass(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </GridItem>
      </Grid>
      {Loading ? (
        <Button colorScheme="blue" mt="50px" ml={["30px", "50px", "70px"]}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="sm"
          />
          Create Account
        </Button>
      ) : (
        <Button
          colorScheme="blue"
          mt="50px"
          ml={["30px", "50px", "70px"]}
          onClick={handelSignUp}
        >
          Create Account
        </Button>
      )}
    </Box>
  );
};

export { SignupInputs };
