import React from 'react'
import {Show, Flex, Text} from '@chakra-ui/react'
import Menus from './Menus'
import ToggleTheme from '../../utils/ToggleTheme'
import themeColor from '../../utils/Colors'

export type props ={
  selected:string,
  setSelected:Function
}
const StickyNav = (prop:props) => {
  return (
    <Show breakpoint='(min-width: 768px)'>
        <Flex  
          bg={themeColor().navaBGColor}
          backdropFilter="blur(10px)"
          gap="20px" 
          justify="space-between" 
          align="center" 
          px={["20px", "30px", "50px", "80px"]} 
          py="15px"
          borderBottom={`1px solid ${themeColor().shadowColor2}`}
          boxShadow={`0 2px 10px ${themeColor().shadowColor}`}
          maxW="1400px"
          mx="auto"
        >
            <a href="#home">
              <Text 
                fontFamily={'PT Serif, serif'} 
                color={themeColor().color2} 
                fontWeight="700" 
                fontSize={["18px", "20px", "22px", "24px"]}
                _hover={{ color: themeColor().color2, transform: "scale(1.05)" }}
                transition="all 0.2s"
              >
                VH
              </Text>
            </a>
            <Flex align="center" gap="30px">
                <Menus selected={prop.selected} setSelected={prop.setSelected}/>
                <ToggleTheme />
            </Flex>     
        </Flex>
      </Show>
  )
}

export default StickyNav