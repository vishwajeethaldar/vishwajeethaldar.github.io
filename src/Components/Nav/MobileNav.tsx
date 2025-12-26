import React,{useState} from 'react'
import { Flex, Box, Text } from "@chakra-ui/react"
import {FaBars} from "react-icons/fa"
import {ImCross} from 'react-icons/im'
import themeColor from '../../utils/Colors'
import ToggleTheme from '../../utils/ToggleTheme'
import Menus from './Menus'

export default function MobileNav({selected, setSelected}:{selected:string, setSelected:Function}) {
    const [showNav, setShowNav] = useState(false)
  return (
    <Box>
      <Flex 
        gap="20px" 
        justify="space-between" 
        align="center" 
        px="20px" 
        py="15px"
      >
        <Box>
          <a href="#home">
            <Text 
              fontFamily={'PT Serif, serif'} 
              color={themeColor().color2} 
              fontWeight="700" 
              fontSize="20px"
            >
              VH
            </Text>
          </a>
        </Box>
        <Flex gap="15px" align="center">
          <Box 
            _hover={{cursor:"pointer", transform: "scale(1.1)"}} 
            onClick={()=>setShowNav(!showNav)}
            transition="all 0.2s"
          >
            {!showNav ? (
              <FaBars fontSize="24px" color={themeColor().color1} />
            ) : (
              <ImCross fontSize="24px" color={themeColor().color1} />
            )}
          </Box>
          <ToggleTheme/>
        </Flex>
      </Flex>
      {showNav && (
        <Box 
          bg={themeColor().navaBGColor}
          borderTop={`1px solid ${themeColor().shadowColor2}`}
          py="10px"
        >
          <Menus selected={selected} setSelected={setSelected}/>
        </Box>
      )}
    </Box>
  )
}
