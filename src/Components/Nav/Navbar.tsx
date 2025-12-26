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
    <Box 
      bg={themeColor().navaBGColor}
      backdropFilter="blur(10px)"
      boxShadow={`0 2px 10px ${themeColor().shadowColor}`}
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Show breakpoint='(min-width: 768px)'>
        <Flex 
          justify="space-between" 
          align="center" 
          px={["20px", "30px", "50px", "80px"]} 
          py="15px"
          maxW="1400px"
          mx="auto"
        >
          <Box>
            <a href="#home">
              <Text 
                fontFamily={'PT Serif, serif'} 
                color={themeColor().color2} 
                fontWeight="700" 
                fontSize={["20px", "22px", "24px", "26px"]}
                _hover={{ 
                  color: themeColor().color2,
                  transform: "scale(1.05)",
                }}
                transition="all 0.2s"
                cursor="pointer"
              >
                VH
              </Text>
            </a>
          </Box>
          <Flex align="center" gap="30px">
            <Menus selected={selected} setSelected={setSelected}/>
            <ToggleTheme/>
          </Flex>
        </Flex>
      </Show>
    </Box>
  )
}

export default Navbar