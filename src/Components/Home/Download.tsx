import React, { useContext } from 'react'
import {Box, Button, Flex, Text} from "@chakra-ui/react"
import {ThemeContext} from "../../context/Theme"
import {BsFillEyeFill} from "react-icons/bs"
import {FiDownload} from 'react-icons/fi'
export default function Download() {
    const {mode} = useContext(ThemeContext)
  return (
    <a href="https://github.com/vishwajeethaldar/RESUME/blob/main/Vishwajeet-Haldar-Resume.pdf" target={"_blank"}>
    <Flex gap={"5px"}>
    <Button fontFamily={'PT Serif,serif'} _hover={{bg:mode==="dark"?"none":"", transform:"scale(.98)", color:"dark"?"#959":"#fcf"}} variant={mode==="dark"?"outline":"outline"}  colorScheme={"messenger"} >
        {/* <Link to={path} target={"_blank"} download={true}> */}
            <Flex gap={"5px"} align={"center"}>
            <Text>{"Resume  "+" "}</Text>
            <BsFillEyeFill />
            </Flex>
          {/* </Link> */}
    </Button>
      <a href="https://github.com/vishwajeethaldar/RESUME/raw/main/Vishwajeet-Haldar-Resume.pdf">
      <Button px={"0"} colorScheme={"messenger"}>
        <FiDownload />
      </Button>
      </a>
    </Flex>
    
    </a>
  )
}
