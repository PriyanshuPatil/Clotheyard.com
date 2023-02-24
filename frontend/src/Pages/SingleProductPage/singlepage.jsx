import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'

const axiosGet=(_id)=>{
  return axios.get(`http://localhost:8080/mens/${_id}`)
  // .then((res)=>res.json())
}

export const Singlepage = () => {
  const {_id}=useParams()
  // console.log({_id})
  const [single, setSingle] = useState({})
  useEffect(()=>{
    axiosGet(_id)
    .then((re)=>setSingle(re.data))
    .catch(er=>console.log(er))
  } ,[_id])
  
  // console.log(single)

  const addToBag=(single)=>{
    console.log(single)
  // axios.post(`http://localhost:8080/carts`,{
  //        price:single.price,
  //        imgUrl:single.imgUrl,
  //        description:single.description,
  //        name:single.name,
  //        discounted_price:single.discounted_price,
  //        type:single.type,
  //        category:single.category
  //      }) 
  //       .then(e=>console.log(e))
  //      .catch(e=>console.log(e))
  // axios.get("http://localhost:8080/carts")
  // .then(e=>console.log(e))
  // .catch(e=>console.log(e))
    }
  return (<Box w='80%' margin={'auto'}>
    <Heading>Singlepage</Heading>
    <Flex>

      <Box w='70%' border={'solid 1px yellow'}>
          <SimpleGrid gap='10px' columns={{lg:2,md:2,sm:1}}>
<img  src={single.imgUrl} alt="" srcset="" />
<img  src={single.imgUrl} alt="" srcset="" />
<img  src={single.imgUrl} alt="" srcset="" />
<img  src={single.imgUrl} alt="" srcset="" />
        </SimpleGrid>
      </Box>
      <Box w='30%' border={'solid 1px blue'}>
      <Heading size={'md'}>{single.name}</Heading>
      <Heading size={'sl'}>{single.description}</Heading>
      <Text size={'md'}>{single.discount}</Text>
      <Text size={'md'}>{single.type}</Text>
      <Text size={'md'}>{single.discounted_price}</Text>
      <Text size={'md'}>{single.category}</Text>
      <Text size={'sl'}>Size:Select Size</Text>
      <Box borderColor={'red'}>
        <Flex gap='10px'>
        <button style={{width:'30px' ,borderRadius:'50%' ,backgroundColor:"lightgrey"}}>XS</button>
        <button style={{width:'30px' ,borderRadius:'50%' ,backgroundColor:"lightgrey"}}>S</button>
        <button style={{width:'30px' ,borderRadius:'50%' ,backgroundColor:"lightgrey"}}>M</button>
        <button style={{width:'30px' ,borderRadius:'50%' ,backgroundColor:"lightgrey"}}>L</button>
        <button style={{width:'30px' ,borderRadius:'50%' ,backgroundColor:"lightgrey"}}>XL</button>
        <button style={{width:'30px' ,borderRadius:'50%' ,backgroundColor:"lightgrey"}}>XXL</button>
        </Flex>
      </Box>
      <Button onClick={()=>addToBag(single)}  bg='#005eb8' w={'70%'} borderRadius='xl'>Add To Bag</Button>
      </Box>
    </Flex>
  </Box>)}
