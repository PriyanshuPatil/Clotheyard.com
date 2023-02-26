import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import "./cart.css"
import {CardItem } from '../../Components/CardItem/CardItem';
let subsum=0
//  let arr=[1,1,1,1,1]
let arr=JSON.parse(localStorage.getItem("sum"))

let allsum=0
const cartGet=()=>{
  //https://dizzy-tuna-twill.cyclic.app/cart
  return axios.get(`https://vercel-deploy-jade-one.vercel.app/cart`)
}
export const Cart = () => {
const [sum,setsum]=useState("")
  const [single, setSingle] = useState([])
// single.map(e=>allsum+=Number(e.price)*sum)
// arr.map((e)=>subsum+=e)
// // console.log(arr)
// console.log(subsum)

// single.map((q,i)=>{
//    if(i==sum){
//     allsum+=(q.price*sum)
//    }}
// )


let tax=(allsum*5/100)

useEffect(()=>{
  cartGet().then((re)=>setSingle(re.data))
  .catch().catch(er=>console.log(er))
  // console.log()
},[])

// console.log(amt)
// console.log(amt[0].index)
  return (<Box w='80%' margin={'auto'} >

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
single.map((e,i)=>
<CardItem e={e} i={i}/>)}
</tbody>
  </table>
</Box>
  <Box className='header' w={"30%"} marginTop={'30px'}>
    <Box   h='400px'bg='#f7f7f7' padding={"5px"}>
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
  <Box  bg='#f7f7f7'  marginTop={'30px'}>
    <Box   h='400px' padding={"5px"}>
      <Grid gap={"20px"}>
 <Heading size={'md'}>ORDER SUMMARY</Heading>
 <Box>
<Flex  justifyContent={"space-between"}>

 <Text>Subtotal</Text>
 <Text>{}</Text>
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
 <Text>{ }</Text>
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



