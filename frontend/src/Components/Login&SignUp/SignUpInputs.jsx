import { Box, Grid, GridItem, Input, InputGroup, InputLeftAddon, InputRightElement,Button,Text } from "@chakra-ui/react"
import { useState } from "react"



const SignupInputs = () =>
{
const [show, setShow] = useState(false)
const handleClick = () => setShow(!show)
    return(
        <Box>
        <Grid templateColumns='repeat(2, 1fr)' gap={10} m='auto' mt='50px' w='85%' >
            <GridItem w='100%'>
            <Text>FirstName*</Text>
            <Input 
             placeholder='Enter FirstName'
            />
            </GridItem>
            <GridItem w='100%'>
            <Text>LastName*</Text>
            <Input 
             placeholder='Enter LastName'
            />
            </GridItem>
            <GridItem w='100%'>
            <Text>Phone Number*</Text>
            <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input type='number' placeholder='Phone Number' />
           </InputGroup>
            </GridItem>
            <GridItem w='100%'>
               <Text>Date of Birth*</Text>
               <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
                />
            </GridItem>
            <GridItem w='100%'>
            <Text>Email*</Text>
            <Input 
             placeholder='Enter Your Email'
            />
            </GridItem>
            <GridItem w='100%'>
            <Text>Password*</Text>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            </GridItem>
        </Grid>
       </Box>
    )
}

export{SignupInputs}