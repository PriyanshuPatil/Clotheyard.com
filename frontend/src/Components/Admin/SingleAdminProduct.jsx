import { Button, Image, Input, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdOutlineEdit, MdDone } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const SingleAdminProduct = ({
  el,
  i,
  updateProductData,
  DeleteProductData,
}) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(false);
  const id = el._id;
  return (
    <Tr backgroundColor={i % 2 ? "#f2f2f2" : "lightblue"} m={"2"} w="100px">
      <Td>
        {id[id.length - 1]}
        {id[id.length - 2]}
        {id[id.length - 3]}
        {id[id.length - 4]}
      </Td>
      <Td>
        <Image src={el.images[0]} w={"70px"}></Image>
      </Td>
      <Td>{el.title}</Td>
      <Td>{el.subtitle}</Td>
      <Td>
        {edit ? (
          <Input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder={el.discounted_price}
            w={"50px"}
            p={0}
          />
        ) : (
          el.discounted_price
        )}{" "}
      </Td>
      <Td
        onClick={() => {
          if (edit) {
            updateProductData(id, value);
          }
          setEdit(!edit);
        }}
      >
        {edit ? <MdDone size={30} /> : <MdOutlineEdit size={30} />}
      </Td>
      <Td
        onClick={() => {
          DeleteProductData(id);
        }}
      >
        <Button backgroundColor={"red"}>DELETE</Button>
      </Td>
    </Tr>
  );
};

export default SingleAdminProduct;