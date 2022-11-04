import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import themeColor from '../../utils/Colors'

export const Sikllitem = ({url, image, title}:{url:string, image:string, title:string}) => {
   
  return (
    <Flex _hover={{cursor:"pointer"}} borderRadius={"10px"}  direction={"column"} border={`1px solid ${themeColor().color2}`} justify={"space-between"} gap={"10px"} align={"center"} py="10px"  h="100%">
        <Box >
            <a href={url} target={"_blank"} rel="noreferrer">
                <Image mx="auto" src={image} w="50%" borderRadius={"10px"} />
            </a>
        </Box>
        <Box as='p' color={themeColor().color1}>
                {title}
        </Box>
    </Flex>
  )
}