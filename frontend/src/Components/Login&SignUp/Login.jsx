import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { LoginIcons } from "./LoginIcons";
import { LoginInputs } from "./LoginInputs";

//

const Login = () => {
  return (
    <Box>
      <Grid gridTemplateColumns={["450px _", "450px _", "450px 1fr"]}>
        <GridItem w="100%" h="auto">
          <Heading textAlign={"center"} mt={20} color="#3182CE" size="2xl">
            CLOTHEYARD's
          </Heading>
          <Text fontSize="sm" textAlign={"center"} mt="20px" color="gray">
            If you are a registered user, please enter your email and password.
          </Text>

          <LoginInputs />
          <LoginIcons />
        </GridItem>
        <GridItem
          w="100%"
          h="auto"
          bgColor={"#FCF2EE"}
          boxSize={"657"}
          width={"100%"}
          display={["none", "none", "block"]}
        >
          <Box
            border={"1px"}
            borderColor={"#3182CE"}
            borderRadius={"15"}
            p="10px"
            h="100px"
            w="80%"
            m="auto"
            mt="10"
          >
            <Text textAlign={"justify"} fontSize="lg" fontFamily={"sans-serif"}>
              "If you love something, wear it all the time... Find things that
              suit you. That's how you look extraordinary."
            </Text>
            <Text
              textAlign={"right"}
              color="#3182CE"
              fontFamily={"cursive"}
              mt={2}
            >
              – Vivienne Westwood
            </Text>
          </Box>
          <Image
            src="https://cdn.dribbble.com/users/2128100/screenshots/15526035/media/287afbbcc6b529bc0da0a906bbfbc506.png?compress=1&resize=768x576&vertical=top"
            alt="Sign Up"
            boxSize={"480"}
            w="65%"
            //border={'1px'}
            //borderColor={'gray.500'}
            m="auto"
          />
          <Text fontSize="md" textAlign={"center"} mt="-10">
            Don't have Account ?{" "}
            <Link color="#3182CE" href="/register">
              Create Account
            </Link>
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export { Login };
