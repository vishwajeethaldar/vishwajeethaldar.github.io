import React, { useContext } from 'react'
import {Button, Text} from "@chakra-ui/react"
import {ThemeContext} from "../../context/Theme"


export default function Download() {
    const {mode} = useContext(ThemeContext)
  return (
    <a href="https://github.com/vishwajeethaldar/RESUME/raw/main/Vishwajeet-Haldar-Resume.pdf" target={"_blank"}>
    <Button fontFamily={'PT Serif,serif'} _hover={{bg:mode==="dark"?"none":"", transform:"scale(.98)", color:"dark"?"#959":"#fcf"}} variant={mode==="dark"?"outline":"outline"}  colorScheme={"messenger"} >
        {/* <Link to={path} target={"_blank"} download={true}> */}
            {"View Resume"}
          {/* </Link> */}
    </Button>
    </a>
  )
}
