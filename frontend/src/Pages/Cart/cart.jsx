import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import "./cart.css"
import { CardItem } from '../../Components/CardItem/CardItem';

const cartGet=()=>{
  return axios.get(`https://dizzy-tuna-twill.cyclic.app/cart`)
}
export const Cart = () => {

  const [single, setSingle] = useState([])

  const [quantity, setQuantity] = useState(1)


let allsum=0
single.map(e=>allsum+=Number(quantity)*Number(e.price))

let tax=(allsum*5/100)

useEffect(()=>{
  cartGet().then((re)=>setSingle(re.data))
  .catch().catch(er=>console.log(er))
},[])
  return (<Box w='80%' margin={'auto'} border="solid 1px red">
    <Flex gap={'10px'}><Heading size={'md'} >Shopping Bag </Heading>
    <Text> {single.length} Items</Text></Flex>
    <Flex>
  <Box >
  <table>
  <thead>
        <tr>
          <th>ITEM</th>
          <th>QUANTITY</th>
          <th >PRICE</th>
        </tr>
        </thead>

        <tbody>
        {
single.map(e=>
<CardItem e={e} />
      
)}
</tbody>

  </table>
</Box>
  <Box className='header' w={"30%"} border={"solid 1px red"} marginTop={'30px'}>
    <Box   h='400px' border={"solid 1px black"}>
      <Grid gap={"20px"}>
 <Heading size={'md'}>ORDER SUMMARY</Heading>
 <Box>
<Flex  justifyContent={"space-between"}>

 <Text>Subtotal</Text>
 <Text>{allsum}</Text>
</Flex>
 </Box>

 <Box>
<Flex justifyContent={"space-between"}>
<Text>Shipping Economy Ground</Text>
 <Text>{90}</Text>
</Flex>
 </Box>

 <Box>
<Flex justifyContent={"space-between"}>
<Text>Sales Tax</Text>
 <Text>{tax}</Text>
</Flex>
 </Box>
 <Box><Flex justifyContent={"space-between"}>

 <Text>Estimated Total</Text>
 <Text>{allsum+tax+90}</Text>
 </Flex>
 </Box>
<Flex alignItems='center'justifyContent={'center'} >
 <Button size={'lg'} bg='#1e3352' w='80%' color={'white'}>CHECKOUT</Button>
</Flex>
</Grid>
</Box>
  </Box>
  </Flex>

  <Box w={'60%'} margin="auto" className='bottumorder'>
  <Box    border={"solid 1px red"} marginTop={'30px'}>
    <Box   h='400px' border={"solid 1px black"}>
      <Grid gap={"20px"}>
 <Heading size={'md'}>ORDER SUMMARY</Heading>
 <Box>
<Flex  justifyContent={"space-between"}>

 <Text>Subtotal</Text>
 <Text>{allsum}</Text>
</Flex>
 </Box>

 <Box>
<Flex justifyContent={"space-between"}>
<Text>Shipping Economy Ground</Text>
 <Text>{90}</Text>
</Flex>
 </Box>

 <Box>
<Flex justifyContent={"space-between"}>
<Text>Sales Tax</Text>
 <Text>{tax}</Text>
</Flex>
 </Box>
 <Box><Flex justifyContent={"space-between"}>

 <Text>Estimated Total</Text>
 <Text>{allsum+tax+90}</Text>
 </Flex>
 </Box>
<Flex alignItems='center'justifyContent={'center'} >
 <Button size={'lg'} bg='#1e3352' w='80%' color={'white'}>CHECKOUT</Button>
</Flex>
</Grid>
</Box>
  </Box>
  </Box>
  </Box>)
}

