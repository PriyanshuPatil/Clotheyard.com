import { Grid, GridItem, Icon } from '@chakra-ui/react'
import { TfiFacebook ,TfiLinkedin } from 'react-icons/tfi'
import { ImGoogle } from 'react-icons/im'


const Facebook = () =>{
    return(
        <Icon as={TfiFacebook} boxSize={6} ml='14px' mt="14px" color='#4A5568'/>
    )
}

const Google = () =>{
    return(
        <Icon as={ImGoogle} boxSize={6} ml='14px' mt="14px" color='#4A5568'/>
    )
}

const  Linkedin = () =>{
    return(
        <Icon as={TfiLinkedin} boxSize={6} ml='14px' mt="14px" color='#4A5568'/>
    )
}

const SignupIcons = () =>
{
 return(
    <Grid templateColumns='repeat(3, 1fr)' gap={2} margin='auto' width={'20%'} mt={7}>
    <GridItem 
     w='100%' h='55'  border='1px' borderColor='gray.200' borderRadius="30"
     _hover={{ bg: "#63B3ED", cursor: "Pointer" }}
     >
    <Facebook  />
    </GridItem>
    <GridItem w='100%' h='55'  border='1px' borderColor='gray.200' borderRadius="30"
     _hover={{ bg: "#63B3ED", cursor: "Pointer" }}
    >
    <Google />
    </GridItem>
    <GridItem w='100%' h='55'  border='1px' borderColor='gray.200' borderRadius="30"
     _hover={{ bg: "#63B3ED", cursor: "Pointer" }}
    >
    <Linkedin />
    </GridItem>
</Grid>
 )

}


export{SignupIcons}