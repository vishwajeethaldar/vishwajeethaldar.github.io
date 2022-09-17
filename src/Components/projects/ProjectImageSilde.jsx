import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'


export const ProjectImageSilde = ({images}) => {
let slide = useRef()
let [count, setCount] =  useState(1)
    
// slide.current = setInterval(()=>{
//   setCount(count===images.length-1?0:count+1)
// }, 2000)
//   useEffect(()=>{
//     return ()=>clearInterval(slide.current);
//   },[])

  return (
    <Box  mx={["auto","auto","auto","auto"]}  w={["96%","96%","90%","90%"]} overflow={"hidden"} py={"15px"} border={"2px solid #ddd"} position="relative">
         <Image src={images[count]} h={"100%"} w="100%"/>
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
