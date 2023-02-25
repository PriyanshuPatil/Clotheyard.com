import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {Box, Button, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'

import { useToast } from '@chakra-ui/react'

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
//https://vercel-deploy-jade-one.vercel.app/
export const Singlepage = () => {
  const toast = useToast()
  const [single, setSingle] = useState(data)
  const [size, setsize] = useState('')


  const {id}=useParams()


  const getData=()=>{
    axios.get(`https://dizzy-tuna-twill.cyclic.app/product/${id}`).then((res)=>{
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
  axios.post(`https://dizzy-tuna-twill.cyclic.app/cart`,{
         price:single.strike_price,
         images:single.images[0],
         subtitle:single.subtitle,
         title:single.title,
         discounted_price:single.discounted_price,
         type:single.type,
         category:single.category,
         size:size
       }) 
        .then(e=>console.log(e))
       .catch(e=>console.log(e))


    }
  return (<Box w='80%' margin={'auto'}>


    <Heading>Singlepage</Heading>
    <Flex columns={{lg:2,md:2,sm:1}}>

      <Box w='70%' >
          <SimpleGrid gap='10px' columns={{lg:2,md:2,sm:1}}>

<img width={'100%'}  src={single.images[0]} alt="imagesd" />
<img width={'100%'}  src={single.images[1]} alt="imagesd" />
<img width={'100%'}  src={single.images[2]} alt="imagesd" />
<img width={'100%'}  src={single.images[3]} alt="imagesd" />

        </SimpleGrid>
      </Box>
      <Box w='30%' paddingTop='30px' paddingLeft={'30px'} >
        <Box position="sticky" right={"20px"}top='100px'>
        <Text color={'red'} fontSize='18px'>New!</Text>
        {/* <Grid gap="40px" > */}
      <Heading size={'md'}>{single.subtitle}</Heading>
      {/* <Heading size={'sl'}>{single.title}</Heading> */}
      {/* <Text size={'md'}>{single.discount}</Text> */}
      {/* <Text size={'md'}>{single.type}</Text> */}
      <Heading size={'md'}marginTop='30px'>{single.strike_price}</Heading>
      {/* <Text size={'md'}>{single.discount}</Text> */}

      <Box marginTop='30px'>

      <Text size={'sl'}>Size:Select Size</Text>
        <Flex gap='10px'>
        <button onClick={()=>setsize("XS")} style={{border:size=="XS"?"solid 2px #0e0b0c":"", width:'30px' ,borderRadius:'50%' ,backgroundColor:"#f2f2f2" }}>XS</button>
        <button onClick={()=>setsize("S")} style={{border:size=="S"?"solid 2px #0e0b0c":"", width:'30px' ,borderRadius:'50%' ,backgroundColor:"#f2f2f2"}}>S</button>
        <button onClick={()=>setsize("M")} style={{border:size=="M" ?"solid 2px #0e0b0c":"", width:'30px' ,borderRadius:'50%' ,backgroundColor:"#f2f2f2"}}>M</button>
        <button onClick={()=>setsize("L")} style={{border:size=="L" ?"solid 2px #0e0b0c":"", width:'30px' ,borderRadius:'50%' ,backgroundColor:"#f2f2f2"}}>L</button>
        <button onClick={()=>setsize("XL")} style={{border:size=="XL" ?"solid 2px #0e0b0c":"", width:'30px' ,borderRadius:'50%' ,backgroundColor:"#f2f2f2"}}>XL</button>
        <button onClick={()=>setsize("XXL")} style={{border:size=="XXL" ?"solid 2px #0e0b0c":"", width:'30px' ,borderRadius:'50%' ,backgroundColor:"#f2f2f2"}}>XXL</button>
        </Flex>
      </Box>
      <button onClick={()=>{addToBag(single);    toast({
                position :"top",
                title: 'Added Successfully.',
                description: "It has been added for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })}} disabled={!size} style={{marginTop:'50px'  , backgroundColor:size?'#005eb8':"", width:'90%',height:"50px" ,borderRadius:'20px',}} >{size?"Add To Bag":"Please Select a Size"}</button>
      {/* </Grid> */}
      <Text  marginTop='30px' size={'sl'}>4 interest-free payments of $3.12 with Klarna. Learn More</Text>
       </Box></Box>
    </Flex>

    <Box>
      <Text>{single.subtitle} {single.category} {single.type}</Text>

      <Heading marginTop={"30px"} size={"sl"}>Details</Heading>
      <ul>
        <li>{single.subtitle}</li>
        <li>{single.title}</li>
        <li>{single.type}</li>
        <li>{single.category}</li>
        <li>{single.discount}</li>
      </ul>
      <Heading marginTop={"30px"} size={"sl"}>Fit</Heading>
      <ul>
        <li>{single.subtitle}</li>
        <li>{single.title}</li>
        <li>{single.type}</li>
        <li>Approx. length (M): 16.25"</li>
        <li>Model height: 5'10" | Wear size: Small</li>
      </ul>
      <Heading marginTop={"30px"} size={"sl"}>Care & Materials</Heading>
      <ul>
        <li>94% cotton, 6% spandex</li>
        <li>Machine wash/dry</li>
  
      </ul>
    </Box>
  </Box>)}
