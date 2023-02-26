import { Button, Select } from "@chakra-ui/react"
import {
    Tr,
    Td,
  } from '@chakra-ui/react'



const AdminRow = () =>
{
    return (
        <Tr>
        <Td>1</Td>
        <Td>Sun Feb 25 2023 20:03:10</Td>
        <Td>User@gmail.com</Td>
        <Td>2</Td>
        <Td>₹5000</Td>
        <Td>
            <Button>Show Details</Button>
        </Td>
        <Td>
        <Select variant={"filled"}>
            <option value='Delivered'>Delivered</option>
            <option value='OnTheWay'>On the way</option>
            <option value='Pending'>Pending</option>
            <option value='Cancled'>Canceled</option>
        </Select>
        </Td>
    </Tr>
    )
}


export{AdminRow}