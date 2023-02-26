import React, { useState, useEffect } from 'react'
import { json, useParams } from "react-router-dom";
import { Box, Button, Flex, Grid, Heading, HStack, Image, Select, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios'
import "../../Pages/Cart/cart.css"
import { Radio, RadioGroup } from '@chakra-ui/react'
let subsum=0
let arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// console.log(arr)
// console.log(subsum)

const deletedata=(id)=>{
  axios.delete(`https://vercel-deploy-jade-one.vercel.app/cart/${id}`)
      window.location.reload()
    }
export const CardItem = ({e,i}) => {
  // console.log(i)
  const [quantity, setQuantity] = useState(1)
  const [value, setValue] = React.useState('1')
  // useEffect(()=>{
  //   arr[i]=(e.price*quantity)
    
  // })
  localStorage.setItem("sum",JSON.stringify(arr))
 

   const datas=[{
    quantity:quantity,
    index:i
   }]
  const setQuantitydata=(data)=>{

    let sumvalue=data.target.value
    setQuantity(sumvalue)
    // aqq.push(sumvalue)
  }

  // useEffect(()=>{

  arr.map((eq)=>subsum+=eq)
  console.log(arr)
  console.log(subsum)

  return (
    <>
 <tr key={e._id} >
         
      <td > <Box className='cart'>
        <Card marginBottom={"40px"} 
      direction={{ base: 'column', sm: 'row' }}
 overflow='hidden' 
          variant='outline'>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={e.images}
            alt='Caffe Latte'
          />
        
          <Stack>
            <CardBody>
              <Heading size='md'>{e.subtitle}</Heading>
              <Text py='2'>{`Color : Multi`}
              </Text>
         <Text py='2'>{`Size : ${ e.size}`}
              </Text>
              <RadioGroup marginTop={"20px"} onChange={setValue} value={value}>
      <Stack direction='column'>
        <Radio value='1'>Ship To Me</Radio>
        <Radio value='2'>In-Store Pickup</Radio>

      </Stack>
    </RadioGroup>
            </CardBody>

          </Stack>
        </Card></Box></td>
        <td>
         <Stack>
          <Grid gap={'40px'}>
        
         
          <Select onChange={(ee)=>setQuantitydata(ee)} name="" id="queti">
          <option  value="1">1</option>
            <option   value="2">2</option>
            <option   value="3">3</option>
            <option  value="4">4</option>
            <option  value="5">5</option>
        </Select>
              <Button onClick={()=>deletedata(e.id)} variant='link' colorScheme='lightgrey'>   Remove </Button>
          </Grid>
          {/* //localStorage.setItem("sum",JSON.stringify(datas)) */}
              </Stack></td>
              <td style={{padding:"40px"}}>{arr[i+1]=(e.price*quantity)} </td>
        </tr>
 
        </>
     )   
}
