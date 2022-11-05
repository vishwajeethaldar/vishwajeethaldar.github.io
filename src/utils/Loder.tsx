import React, { useEffect, useState } from 'react'
import { CircularProgress, CircularProgressLabel, Box } from '@chakra-ui/react'
export default function Loder() {
    const [loading, setLoading]  =  useState(true)
 
useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },1000)
  
},[])
  return (
    <Box display={loading?"block":"none"} h={"100vh"} w={"100vw"} position={"fixed"} top={"0px"} bg={"#fff"} zIndex={"100"}>
        <Box position={"absolute"} top={"46vh"} left={"50vw"}>
            <CircularProgress isIndeterminate color={"blue.500"}/>
        </Box>
    </Box>
  )
}
