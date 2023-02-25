import { Box, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import { SignupIcons } from "./SignupIcons";
import { SignupInputs } from "./SignUpInputs";

const SignUp = () => {
  return (
    <Box>
      <Grid gridTemplateColumns={["_ 1fr", "_ 1fr", "450px 1fr"]}>
        <GridItem w="100%" h="auto" display={["none", "none", "block"]}>
          <Image
            src="https://cdn.dribbble.com/users/1450874/screenshots/14971476/media/2d8e80c538d9138984673ea5fb6d5e8d.jpg?compress=1&resize=768x576&vertical=top"
            alt="Sign Up"
          />
          <Image
            src="https://cdn.dribbble.com/users/1450874/screenshots/14964728/media/dec18d9d0fbdc3c5e14eb544cb9d9e7e.jpg?compress=1&resize=768x576&vertical=top"
            alt="Sign Up"
            boxSize={319}
            w="100%"
          />
        </GridItem>
        <GridItem w="100%" h="auto">
          <Heading textAlign={"center"} mt={10} color="#3182CE" size="2xl">
            CLOTHEYARD's
          </Heading>
          <SignupIcons />
          <Text fontSize="lg" textAlign={"center"} mt="10px" color="gray">
            or use your email for registration
          </Text>
          <SignupInputs />
        </GridItem>
      </Grid>
    </Box>
  );
};

export { SignUp };
