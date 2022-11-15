import React,{useState} from 'react'
import {Show, Flex, Box, Image} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {ImCross} from 'react-icons/im'
import themeColor from '../../utils/Colors'
import ToggleTheme from '../../utils/ToggleTheme'
import Menus from './Menus'
import {props} from '../Nav/StickyNav'

export default function MobileNav({selected, setSelected}:{selected:string, setSelected:Function}) {
    const [showNav, setShowNav] = useState(false)
  return (
    <Box pt={"10px"}>
         <Show breakpoint='(max-width: 767px)'  >
        <Flex gap="20px" justify={"space-between"} align={"center"} px={"20px"} pb={"10px"} mb={"10px"} borderBottom={`1px solid ${themeColor().shadowColor}`}>
          <Flex align={"center"} gap={"10px"} >
            <a href="#home"><Image src={themeColor().brandLogo} alt="Brand Logo" w={"40px"}/> </a> 
            {/* <Link to="/"> <Text  color={themeColor().color2} fontWeight={"700"} fontSize={"26px"}>Vishwajeet Haldar</Text></Link> */}
          </Flex>
          <Flex gap={"15px"} align={"center"} >
            <Box _hover={{cursor:"pointer"}} onClick={()=>setShowNav(!showNav)} >
              {!showNav?<FaBars fontSize={"30px"} color={themeColor().color3} /> :<ImCross fontSize={"30px"} color={themeColor().color3}/>}
            </Box>
            <ToggleTheme/>
          </Flex>
        </Flex>
        {showNav&&<Menus selected={selected} setSelected={setSelected}/>}
      </Show>
    </Box>
  )
}
