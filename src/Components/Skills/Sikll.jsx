import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Sikll = ({url, image, title}) => {
    const shadow = useColorModeValue("#fff","rgba(255,255,200,.3)")
  return (
    <Flex borderRadius={"10px"} bg={shadow} direction={"column"} justify={"space-between"} gap={"15px"} align={"center"} p="20px"  h="100%">
        <Box>
            <a href={url} target={"_blank"} rel="noreferrer">
                <Image mx="auto" src={image} w="50%" />
            </a>
        </Box>
        <Box as='p'>
                {title}
        </Box>
    </Flex>
  )
}
