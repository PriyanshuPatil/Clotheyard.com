import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Box, Button, Flex, Grid, Heading, HStack, Image, Select, SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import axios from 'axios'
import "../../Pages/Cart/cart.css"
import { Radio, RadioGroup } from '@chakra-ui/react'

export const CardItem = ({e}) => {

  // const[sum,setSum]=useState([])
 const [quantity, setQuantity] = useState(1)
  const [value, setValue] = React.useState('1')
  const deletedata=(id)=>{
    axios.delete(`https://dizzy-tuna-twill.cyclic.app/cart/${id}`)
    window.location.reload()

  }
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
        
         
          <Select onChange={(ee)=>setQuantity(ee.target.value)} name="" id="">
          <option  value="1">1</option>
            <option   value="2">2</option>
            <option   value="3">3</option>
            <option  value="4">4</option>
            <option  value="5">5</option>
        </Select>
              <Button onClick={()=>deletedata(e.id)} variant='link' colorScheme='lightgrey'>
                Remove
              </Button>
          </Grid>
              </Stack></td>
    
              <td style={{padding:"40px"}}>{e.price} </td>
        </tr>

        </>
     )   
}
