import { Box, Grid, GridItem, Input, InputGroup, InputLeftAddon, InputRightElement,Button,Text, Spinner } from "@chakra-ui/react"
import { useState } from "react"



const LoginInputs = () =>
{
const [show, setShow] = useState(false)
const [email,setEmail] = useState("")
const [pass,setPass] = useState("")
const [loading,setLoading] = useState(false)
const handleClick = () => setShow(!show)
const handleLogin=()=>
{
   if(email && pass)
   {
    if(email=='Admin@gmail.com' && pass=='@Admin')
    {
        setLoading(true)
        setTimeout(()=>{
         setLoading(false)
         alert("Admin LoggedIn SuccessFully")
        },1000)
    }
    else
    {
        //Backend Authentication code here
        setLoading(true)
        setTimeout(()=>{
         setLoading(false)
         alert("LoggedIn SuccessFully")
        },1500)
       
    }
   }
   else{
    alert('Invalid Inputs')
   }
}
    return(
        <Box>
        <Grid templateColumns='repeat(1, 1fr)' gap={10} m='auto' mt='80px' w='85%' >
            <GridItem w='100%'>
            <Text>Email*</Text>
            <Input 
             placeholder='Enter Your Email'
             //value='email'
             onChange={(e)=>setEmail(e.target.value)}
            />
            </GridItem>
            <GridItem w='100%'>
            <Text>Password*</Text>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    //value='pass'
                    onChange={(e)=>setPass(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Text 
            textAlign={"right"} 
            mt='2' 
            color={'#3182CE'}
            _hover={{ color: "#63B3ED", cursor: "Pointer" }}
            >Forgot Password ?</Text>
            </GridItem>
            <GridItem w='100%'>
             
            {loading ? <Button
            colorScheme='blue'
            width={'100%'} 
            mt='8' 
            size='md'
            >
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='sm'
                />
            </Button>
            :
            <Button 
             colorScheme='blue'
             width={'100%'} 
             mt='8' 
             size='md'
             onClick={handleLogin}
             >Login</Button>
            }
            </GridItem>
        </Grid>
       </Box>
    )
}

export{LoginInputs}