import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

import "../../Pages/Cart/cart.css";
import { Radio, RadioGroup } from "@chakra-ui/react";

export const CardItem = ({ e, handleDelete, handleUpdate }) => {
  return (
    <>
      {" "}
      <Box>
        <Card
          marginBottom={"40px"}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "150px", md: "200px" }}
            src={e.product.images[0]}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{e.product.subtitle}</Heading>
              <Text py="1">{`Color : Multi`}</Text>
              <Flex py="1" alignItems={"center"}>
                {`Size : `}{" "}
                <Select
                  name=""
                  id="queti"
                  w={"fit-content"}
                  value={e.size}
                  onChange={(event) => {
                    let payload = { size: event.target.value };
                    handleUpdate(e._id, payload);
                  }}
                >
                  {e.product.size.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Select>{" "}
              </Flex>
              <RadioGroup marginTop={"10px"}>
                <HStack direction="column">
                  <Radio value="1">Ship To Me</Radio>
                  <Radio value="2">In-Store Pickup</Radio>
                </HStack>
              </RadioGroup>
              <Heading pt={"10px"} fontSize={"lg"} color={"gray"}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(e.product.discounted_price)}
                /-{" "}
              </Heading>
              <Heading pt={"10px"} fontSize={"lg"}>
                Total Price:-{" "}
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(e.product.discounted_price * e.quantity)}
                /-{" "}
              </Heading>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                pt={"15px"}
              >
                {"Select QTY:"}
                <Select
                  name=""
                  id="queti"
                  w={"fit-content"}
                  value={e.quantity}
                  onChange={(event) => {
                    let payload = { quantity: event.target.value };
                    handleUpdate(e._id, payload);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
                <Button
                  onClick={() => {
                    handleDelete(e._id);
                  }}
                  variant="solid"
                  colorScheme="red"
                >
                  {" "}
                  Remove{" "}
                </Button>
              </Flex>
            </CardBody>
          </Stack>
        </Card>
      </Box>
    </>
  );
};
