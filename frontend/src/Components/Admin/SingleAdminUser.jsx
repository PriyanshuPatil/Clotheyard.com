import { Button, Image, Input, InputRightElement, Select } from "@chakra-ui/react";
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
const SingleAdminUser = ({
  el,
  i,
  updateUserData,
  DeleteUsersData,
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
        {el.email}
      </Td>
      <Td>{el.first_name+" "+el.last_name}</Td>
      <Td>
        {edit ? (
          <Select onChange={(e) => {
              setValue(e.target.value);
            }}
          p={{ base: "0px", md: "2px", lg: "3px" }}
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
        >
          <option value={`${el.admin}`}>{el.admin?"Admin":"User"}</option>
          <option value={`${!el.admin}`}>{!el.admin?"Admin":"User"}</option>
        </Select>

        ) : (
          el.admin?"Admin":"User"
        )}{" "}
      </Td>
      <Td
        onClick={() => {
          if (edit) {
            updateUserData(id,value);
          }
          setEdit(!edit);
        }}
      >
        {edit ? <MdDone size={30} /> : <MdOutlineEdit size={30} />}
      </Td>
      <Td
        onClick={() => {
         DeleteUsersData(id);
        }}
      >
        <Button backgroundColor={"red"}>DELETE</Button>
      </Td>
    </Tr>
  );
};

export default SingleAdminUser;