import {Box, Button, Flex, Image } from '@chakra-ui/react'
import React,{useState}from 'react'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai"
export default function ProjectImages({image}:{image:Array<string>}) {
    const [imageC, setImageC]= useState(0)

    const nextSlide = ()=>{
      if(imageC===image.length-1){
        setImageC(0)
      }else{
        setImageC(projectNo=>projectNo+1)
      }
  }

  const prevSlide = ()=>{
      if(imageC===0){
        setImageC(image.length-1)
      }else{
        setImageC(projectNo=>projectNo-1)
      }
  }


  return (
    <Box position={"relative"}>
      <Image w={"100%"} h={"100%"} src={image[imageC]} alt={"project Image"}/>
      <Button _hover={{bg:"none"}} onClick={prevSlide} position={"absolute"} top={"45%"} left={"0px"} colorScheme={"orange"} variant={"outline"}>
          <AiOutlineDoubleLeft/>
      </Button>
      <Button _hover={{bg:"none"}} onClick={nextSlide} position={"absolute"} top={"45%"} right={"0px"} colorScheme={"orange"} variant={"outline"} >
          <AiOutlineDoubleRight/>
      </Button>
    </Box>
  )
}
