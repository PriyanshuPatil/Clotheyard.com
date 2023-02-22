import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Grid, Heading, HStack, Image, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios'

const axiosGet=(id)=>{
  return axios.get(`http://localhost:8080/cart`)
}

export const Cart = () => {
  const {id}=useParams()
  const [single, setSingle] = useState([])
console.log(single)
  useEffect(()=>{
     axiosGet(id).then((re)=>setSingle(re.data))
     .catch().catch(er=>console.log(er))
  },[id])

   
  const checkout=()=>{

  }

  const deletedata=(id)=>{
    axios.delete(`http://localhost:8080/cart/${id}`)
  }
  return (<Box w='80%' margin={'auto'}>
    <Flex gap={'10px'}><Heading size={'md'} >Shopping Bag </Heading>
    <Text> {single.length} Items</Text></Flex>
  {/* <Flex> */}
  <table>
        <tr >
          <th>ITEM</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
        </tr>
      {/* <Box w='70%' border={'solid 1px yellow'} marginTop='40px'> */}
        {/* <Heading size={'sm'}>ITEM</Heading> */}
          {/* <SimpleGrid gap='10px' columns={{lg:2,md:2,sm:1}}> */}

        {/* <img src={single.data.image}/> */}
        {

single.map(e=><tr key={e.id}>
       <td> <Card 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={e.image1}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card></td>
<td>
 <Stack>
  <Grid gap={'40px'}>

  <select name="" id="" style={{textAlign:"center"}}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
      <Button onClick={()=>deletedata(e.id)} variant='link' colorScheme='lightgrey'>
        Remove
      </Button>
  </Grid>
      </Stack></td>
     
{/* <Grid gap={'30px'}>
<Box> */}

      <td style={{padding:"40px"}}><Stack padding={"30px"}> {e.price}</Stack></td>
{/* </Box>
</Grid> */}
</tr>)}
  {/* </Box> */}
  </table>
  <Box w={'30%'} marginTop={'30px'} border='solid 1px red'>
 <Heading size={'md'}>ORDER SUMMARY</Heading>
 <Text>Subtotal</Text>
 <Text>Shipping Economy Ground</Text>
 <Text>Sales Tax</Text>
 <Text>Estimated Total</Text>
<Flex alignItems='center'justifyContent={'center'} >
 <Button size={'lg'} bg='#1e3352' w='80%' color={'white'}>CHECKOUT</Button>
</Flex>
  </Box>
  {/* </Flex> */}
  </Box>)
}
