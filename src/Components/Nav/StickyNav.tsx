import React from 'react'
import {Show, Flex, Image} from '@chakra-ui/react'
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
        <Flex  bg={themeColor().navaBGColor} gap="20px" justify={"space-between"} align={"center"} px={"15px"} borderBottom={`1px solid ${themeColor().shadowColor}`}>
            <a href="#Top"><Image src={themeColor().brandLogo} alt="Brand Logo" w={"40px"}/> </a>
            <Flex align={"center"} gap={"15px"}>
                <Menus selected={prop.selected} setSelected={prop.setSelected}/>
                <ToggleTheme />
            </Flex>     
        </Flex>
      </Show>
  )
}

export default StickyNav