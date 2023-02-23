import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Grid, Heading, HStack, Image, Select, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios'

export const CardItem = ({e}) => {
  const [quantity, setQuantity] = useState(1)
    const deletedata=(_id)=>{
    axios.delete(`http://localhost:8080/cart${_id}`)
  }
  return (
    <>
        <tr key={e._id}>
         
               <td> <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={e.imgUrl}
            alt='Caffe Latte'
          />
        
          <Stack>
            <CardBody>
              <Heading size='md'>{e.name}</Heading>
        
              {/* <Text py='2'>
         {e.description}
              </Text> */}
            </CardBody>
        
            <CardFooter>
            </CardFooter>
          </Stack>
        </Card></td>
        <td>
         <Stack>
          <Grid gap={'40px'}>
        
         
          <Select onChange={(ee)=>setQuantity(ee.target.value)} name="" id="">
          <option  value="1">1</option>
            <option   value="2">2</option>
            <option   value="3">3</option>
            <option  value="4">4</option>
            <option  value="5">5</option>
        </Select>
              <Button onClick={()=>deletedata(e._id)} variant='link' colorScheme='lightgrey'>
                Remove
              </Button>
          </Grid>
              </Stack></td>
           
        {/* <Grid gap={'30px'}>
        <Box> */}
        
              <td style={{padding:"40px"}}>{ e.price*quantity} </td>
        </tr>
        </>
     )   
}
