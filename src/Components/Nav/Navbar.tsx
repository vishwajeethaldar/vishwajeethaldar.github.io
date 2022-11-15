import ToggleTheme from "../../utils/ToggleTheme"
import { BrandTitle } from "./BrandTitle"
import Menus from "./Menus"
import {Box, Flex, Image, Show,Text} from '@chakra-ui/react'
import themeColor from "../../utils/Colors"

import { Link } from "react-router-dom"
import {useContext, useState} from 'react'
import { ThemeContext } from "../../context/Theme"


export const Navbar = ({selected, setSelected}:{selected:string, setSelected:Function}) => {

  return (
    <Box  boxShadow={[`0px 2px 2px ${themeColor().shadowColor}`,`0px 2px 2px ${themeColor().shadowColor}`,'none', 'none']}>
          {/* <Image src={themeColor().brandLogo} alt={"Brand Logo"} w={["100px"]}/> */}
        <Show breakpoint='(min-width: 768px)' >
          <Flex  justify={"center"} py={["0px", "0px", "30px","20px"]} pt={"25px"}>
            <Box mt={"50px"}>
            <BrandTitle  fontS={["16px", "18px", "38px", "42px"]}/>
            </Box>
            <Box position={"absolute"} top={"30px"} right={"50px"}>
            <ToggleTheme/>
            </Box>
          </Flex>
      </Show>
      <Show breakpoint='(min-width: 768px)'>
        <Flex gap="20px" justify={"center"} align={"center"}>
            <Menus selected={selected} setSelected={setSelected}/>
        </Flex>
      </Show>

     
       
      
      
      


    </Box>
  )
}

export default Navbar