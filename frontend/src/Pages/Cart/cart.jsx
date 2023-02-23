import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Grid, Heading, HStack, Image, Select, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios'
import { CardItem } from '../../Components/CardItem/CardItem';

const cartGet=()=>{
  return axios.get(`http://localhost:8080/carts`)
}

export const Cart = () => {

  const [single, setSingle] = useState([])

  const [quantity, setQuantity] = useState(1)

  
  // quantity.map((e)=>console.log(e))

  // const [quantity1, setQuantity1] = useState(1)
  // const [quantity3, setQuantity2] = useState(3)
  // const [quantity4, setQuantity3] = useState(4)
  // const [quantity5, setQuantity4] = useState(5)
//   const [price, setPrice] = useState(1)
// console.log(quantity1)
// let sum=1
let allsum=0
single.map(e=>allsum+=Number(quantity)*Number(e.price))
  

useEffect(()=>{
  cartGet().then((re)=>setSingle(re.data))
  .catch().catch(er=>console.log(er))
},[])
console.log(single)
  const deletedata=(_id)=>{
    axios.delete(`http://localhost:8080/cart${_id}`)
  }
//   const result = single.reduce((total, currentValue) => total = quantity * currentValue.price,1);

// console.log(result);  
  return (<Box w='80%' margin={'auto'}>
    <Flex gap={'10px'}><Heading size={'md'} >Shopping Bag </Heading>
    <Text> {single.length} Items</Text></Flex>
  <Flex>
  <Box>
  <table>
  <thead style={{textAlign:"start"}}>
        <tr >
          <th>ITEM</th>
          <th>QUANTITY</th>
          <th >PRICE</th>
        </tr>
        </thead>

        <tbody>
        {
single.map(e=>
<CardItem e={e}/>
      
)}
</tbody>
{/* </Grid> */}
  {/* </Box> */}
  </table>
</Box>
  <Box w={'30%'} marginTop={'30px'} border='solid 1px red'>
 <Heading size={'md'}>ORDER SUMMARY</Heading>
 <Text>Subtotal</Text>
 <Text>Shipping Economy Ground</Text>

 <Text>Sales Tax</Text>
 <Box><Flex justifyContent={"space-between"}>

 <Text>Estimated Total</Text>
 <Text>{allsum}</Text>
 </Flex>
 </Box>
<Flex alignItems='center'justifyContent={'center'} >
 <Button size={'lg'} bg='#1e3352' w='80%' color={'white'}>CHECKOUT</Button>
</Flex>
  </Box>
  </Flex>
  </Box>)
}
