import {Box, Image } from '@chakra-ui/react'
import React from 'react'
import themeColor from '../../utils/Colors'

export default function ProjectImages({image}:{image:Array<string>}) {
  if (!image || !image.length || !image[0]) {
    return null
  }

  return (
    <Box 
      position="relative" 
      w="100%" 
      h="100%"
      borderRadius="10px"
      overflow="hidden"
    >
      <Image 
        w="100%" 
        h="100%" 
        objectFit="cover"
        src={image[0]} 
        alt="project Image"
        bg={themeColor().bgColor}
        onError={(e: any) => {
          e.target.style.display = 'none'
        }}
      />
    </Box>
  )
}
