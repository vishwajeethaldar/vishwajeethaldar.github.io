import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'


export const ProjectImageSilde = ({images, startSlide, stopSlide}) => {
  let [count, setCount] =  useState(1)

  useEffect(()=>{
    startSlide(images, count, setCount)
    return ()=> stopSlide()
  },[count])
  return (
    <Box  onMouseOut={()=>startSlide(images, count, setCount)} onMouseOver={()=>stopSlide()} _hover={{cursor:"pointer", }} mx={["auto","auto","auto","auto"]}  w={["96%","96%","90%","90%"]} overflow={"hidden"} py={"15px"} border={"2px solid #ddd"} position="relative">
         <Image _hover={{transform:"scale(1.1)"}} src={images[count]} h={"100%"} w="100%" transition={"all .3s linear"}/>
         <Flex position={"absolute"} bottom="5px" left={"35%"} gap={"20px"} >
         {images.map((image, i)=>{
          return (
              <Box _hover={{cursor:"pointer"}}  onClick={()=>setCount(i)} key={i} w="20px" h="20px" border={"1px solid #3f5962"} borderRadius={"50%"} position={"relative"}>
                 
                 {i===count?
                 <Box position={"absolute"} top={"11%"} left={"10%"}  w="14px" h="14px" border={"1px solid #352"} borderRadius={"50%"} bg={"#352"}></Box>
                :
                ""} 
              </Box>
          )
         })}
          </Flex>
    </Box>
  )
}
