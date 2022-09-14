import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {MenuLink} from './MenuLink'
import { ToggleMode } from './ToggleMode'
import menus from './menus';



export const Navmenus = ({diection}) => {
 
  return (
    <Flex w={"100%"} direction={diection} gap={["0", "0","10px","10px"]} align={["flex-start","flex-start", "center", "center"]}>
      {menus.map((menu)=>{
        return <Box key={menu.id} w="100%"  >
                <MenuLink linkname={menu.name} linkpath={menu.path}  size={['1em','1em','1.2em','1.2em']}/>
               </Box>
      })}
    <Box display={["none","none","block", "block"]}>
        <ToggleMode/>
    </Box>
    </Flex>
  )
}
