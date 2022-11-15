import { Box, Text, transition } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const BrandName = ({brandName, size, font, color}) => {
  return (
    <Box>
         <Link to="/">
            <Text _hover={{fontWeight:"600", color:"#969", transition:"all .15s linear"}} fontSize={size} fontFamily={font} color={color} fontWeight="600" > { brandName } </Text>
         </Link>
    </Box>
  )
}
