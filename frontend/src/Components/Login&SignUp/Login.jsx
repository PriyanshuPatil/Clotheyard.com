import { Box, Button, Grid, GridItem, Heading,Text,Image } from '@chakra-ui/react'
import { SignupIcons } from './SignupIcons'
import { SignupInputs } from './SignUpInputs'


const Login = () =>
{
   return(
 <Box>
    <Grid  gridTemplateColumns={'450px 1fr'}>
            <GridItem w='100%' h='auto' >
            <Heading textAlign={'center'} mt={10} color='#3182CE' size='2xl'>CLOTHEYARD's</Heading>
            </GridItem>
            <GridItem w='100%' h='auto' bgColor={'#FCF2EE'} boxSize={"657"} width={'100%'}>
            <Text fontSize='xl' textAlign={'center'}>You can have anything you want in life if you dress for it</Text>
            <Image
                src='https://cdn.dribbble.com/users/2128100/screenshots/15526035/media/287afbbcc6b529bc0da0a906bbfbc506.png?compress=1&resize=768x576&vertical=top'
                alt='Sign Up'
                boxSize={"400"}
                w='65%'
               //  border={'1px'}
               //  borderColor={'gray.500'}
                m='auto'
                mt='40'
            />
            </GridItem>
    </Grid>
  </Box>
   )
}


export{Login}