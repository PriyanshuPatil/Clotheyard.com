import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'

const data={
  id:1,
    category: "Child",
  title: "HELLCAT",
    type:"shirt",
  subtitle: "Set Of 2 Boys Sweatshirt",
    discounted_price: "679",
    strike_price: "3998",
    discount: "(83% OFF)",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg"
    ],
    size: [
      "3-4Y,",
      "5-6Y,",
      "7-8Y,",
      "9-10Y,",
      "11-12Y,",
      "13-14Y,",
      "15-16Y"
    ],
    rating: "4.4",
    rating_count: "5"
  }

export const Singlepage = () => {
  const [single, setSingle] = useState(data)
  



  const {id}=useParams()


  const getData=()=>{
    axios.get(`http://localhost:8080/mens/${id}`).then((res)=>{
    console.log(res);  
    setSingle(res.data)}).catch((err)=>console.log(err));
  }

  console.log(single)
  useEffect(()=>{
    // getData()
  } ,[])
  
  console.log(single)

  const addToBag=(single)=>{
    console.log(single)
  axios.post(`http://localhost:8080/cart`,{
         price:single.price,
         imgUrl:single.imgUrl,
         description:single.description,
         name:single.name,
         discounted_price:single.discounted_price,
         type:single.type,
         category:single.category
       }) 
        .then(e=>console.log(e))
       .catch(e=>console.log(e))
  axios.get("http://localhost:8080/cart")
  .then(e=>console.log(e))
  .catch(e=>console.log(e))
    }
  return (<Box w='80%' margin={'auto'}>
    <Heading>Singlepage</Heading>
    <Flex>

      <Box w='70%' border={'solid 1px yellow'}>
          <SimpleGrid gap='10px' columns={{lg:2,md:2,sm:1}}>
<img  src={single.images[0]} alt="imagesd"  />
<img  src={single.images[1]} alt="imagesd"  />
<img  src={single.images[2]} alt="imagesd"  />
<img  src={single.images[3]} alt="imagesd"  />
        </SimpleGrid>
      </Box>
      <Box w='30%' border={'solid 1px blue'}>
      <Heading size={'md'}>{single.subtitle}</Heading>
      {/* <Heading size={'sl'}>{single.title}</Heading> */}
      {/* <Text size={'md'}>{single.discount}</Text> */}
      <Text size={'md'}>{single.type}</Text>
      <Heading size={'md'}>${single.strike_price}</Heading>
      {/* <Text size={'md'}>{single.discount}</Text> */}
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
