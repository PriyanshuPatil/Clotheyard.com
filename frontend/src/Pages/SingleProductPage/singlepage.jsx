import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'

const axiosGet=(id)=>{
  return axios.get(`http://localhost:8080/posts/${id}`)
}
const addToBag=(single)=>{
  axios.post(`http://localhost:8080/cart`,{
    id:single.id,
    price:single.price,
    image1:single.image1,
    title:single.title,
  })
  }
export const Singlepage = () => {
  const {id}=useParams()
  const [single, setSingle] = useState({})
console.log(single)
  useEffect(()=>{
     axiosGet(id).then((re)=>setSingle(re.data))
     .catch().catch(er=>console.log(er))
  },[id])

  return (<Box w='80%' margin={'auto'}>
    <Heading>Singlepage</Heading>
    <Flex>

      <Box w='70%' border={'solid 1px yellow'}>
          <SimpleGrid gap='10px' columns={{lg:2,md:2,sm:1}}>

        {/* <img src={single.data.image}/> */}
<img  src={single.image1} alt="" srcset="" />
<img  src={single.image2} alt="" srcset="" />
<img  src={single.image3} alt="" srcset="" />
<img  src={single.image4} alt="" srcset="" />
        {/* <img src={single.data.image}/>
        <img src={single.data.image}/>
        <img src={single.data.image}/> */}
        </SimpleGrid>
      </Box>
      <Box w='30%' border={'solid 1px blue'}>
      <Heading size={'md'}>{single.title}</Heading>
      <Heading size={'md'}>{single.price}</Heading>
      <Heading size={'sl'}>Size:Select Size</Heading>
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
