import { Grid, GridItem, Icon } from '@chakra-ui/react'
import { TfiFacebook ,TfiLinkedin } from 'react-icons/tfi'
import { ImGoogle } from 'react-icons/im'


const Facebook = ({boxSize,ml,mt,color}) =>{
    return(
        <Icon as={TfiFacebook} boxSize={boxSize} ml={ml} mt={mt} color={color} textAlign='center'/>
    )
}

const Google = ({boxSize,ml,mt,color}) =>{
    return(
        <Icon as={ImGoogle} boxSize={boxSize} ml={ml} mt={mt} color={color} textAlign='center'/>
    )
}

const  Linkedin = ({boxSize,ml,mt,color}) =>{
    return(
        <Icon as={TfiLinkedin} boxSize={boxSize} ml={ml} mt={mt} color={color} textAlign='center'/>
    )
}

const SignupIcons = () =>
{
 return(
    <Grid templateColumns='repeat(3, 1fr)' gap={2} margin='auto' width={['55%','28%','20%']} mt={7}>
    <GridItem 
     w='100%' h='55'  border='1px' borderColor='gray.200' borderRadius="30"
     _hover={{ bg: "#63B3ED", cursor: "Pointer" }}
     >
    <Facebook boxSize={6} ml='14px' mt="14px"  color='#4A5568' />
    </GridItem>
    <GridItem w='100%' h='55'  border='1px' borderColor='gray.200' borderRadius="30"
     _hover={{ bg: "#63B3ED", cursor: "Pointer" }}
    >
    <Google boxSize={6} ml='14px' mt="14px" color='#4A5568'/>
    </GridItem>
    <GridItem w='100%' h='55'  border='1px' borderColor='gray.200' borderRadius="30"
     _hover={{ bg: "#63B3ED", cursor: "Pointer" }}
    >
    <Linkedin  boxSize={6} ml='14px' mt="14px" color='#4A5568'/>
    </GridItem>
</Grid>
 )

}


export{SignupIcons}