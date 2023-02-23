import { Box, Flex, Grid, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Flex display={{base:"block",md:"block",lg:"flex"}}>
      <Box w={{base:'90%', md:"90%", lg:"20%"}} justifyContent="center" padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <Skeleton height="50px" mb={"10px"} margin="auto" />
        <Skeleton height="20px" mb={"10px"} />
        <Skeleton height="50px" mb={"10px"} margin="auto" />
        <Skeleton height="20px" mt={"50px"} mb={"10px"} />
        <Skeleton height="20px" mt={"50px "} mb={"10px"} />
        <Skeleton height="20px" mt={"50px"} mb={"10px"} />
        <Skeleton height="20px" mt={"50px "} mb={"10px"} />
        <Skeleton height="20px" mb={"10px"} />
        <Skeleton height="20px" mb={"10px"} />
      </Box>

      <Grid
        mt={"30px"}
        marginLeft={"40px"}
        paddingLeft={"15px"}
        w={{base:'80%', md:"80%", lg:"70%"}}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        <Box height={"auto"}>
          <Skeleton height="250px " mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
          <Skeleton height="20px" mt={"10px"} mb={"10px"} />
        </Box>

        <Box height={"auto"}>
          <Skeleton height="250px " mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
          <Skeleton height="20px" mt={"10px"} mb={"10px"} />
        </Box>

        <Box height={"auto"}>
          <Skeleton height="250px " mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
          <Skeleton height="20px" mt={"10px"} mb={"10px"} />
        </Box>

        <Box height={"auto"}>
          <Skeleton height="250px " mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
          <Skeleton height="20px" mt={"10px"} mb={"10px"} />
        </Box>
        <Box height={"auto"}>
          <Skeleton height="250px " mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
          <Skeleton height="20px" mt={"10px"} mb={"10px"} />
        </Box>

        <Box height={"auto"}>
          <Skeleton height="250px " mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="20px" mb={"10px"} />
          <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
          <Skeleton height="20px" mt={"10px"} mb={"10px"} />
        </Box>
      </Grid>
    </Flex>
  );
};

export default LoadingSkeleton;
