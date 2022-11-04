import { Box, Collapse, Flex, Stack } from '@chakra-ui/react'
import { BrandName } from './BrandName'
import { Navmenus } from './Navmenus'
import {MenuToggleBtn} from './MenuToggleBtn'
import { useState } from "react";
import { Show } from '@chakra-ui/react'
import { useContext } from 'react';
import {AppContext} from '../../Context/AppContext';

export const Header = ({position, top, zindex}) => {
  const [showmenu, setshowMenu] =  useState(false)
  const {bgColor, borderColor, color} = useContext(AppContext)

  return (
    <Box  bg={bgColor} position={position} zIndex={zindex} top={top} w={"100%"} mx={"auto"} boxShadow={[showmenu===false?"none":"lg",showmenu===false?"none":"lg", "none", "none"]} pb={showmenu===false?"0px":"15px"} backdropFilter={"blur(10px)"} >
      <Flex  bg={bgColor} w="100%" px="20px" align={"center"} justify={["space-between"]}   backdropFilter={"blur(10px)"} borderBottom={`1px solid ${borderColor}`} > 
        {/* Brand Text Webiste Name */}
          <Box>
            <BrandName color={color} brandName={"VH"} size={{base:"1.2em", sm:"1.2em", md:"1.4em", lg:"1.6em"}} />
          </Box>

          {/* Menus for Large and Medium Size Screen */}
          <Box display={["none", "none", "block"]}>
              <Navmenus diection={"row"}/>
          </Box>

        {/* Menus toggle button for small screen */}
          
          <Box display={["block", "block", "none"]}>
            <MenuToggleBtn state={showmenu} updateState={setshowMenu} />
          </Box>

      </Flex>

    {/* Menus  for small screen */}
      <Show breakpoint='(max-width: 768px)'>
        <Collapse px="10px" in={window.innerWidth<=768?showmenu:console.log("false")}  animateOpacity>
          {/* display={[showmenu===false?"none":"block",showmenu===false?"none":"block", "none", "none"]} */}
              <Navmenus diection={"column"}/>
        </Collapse>
      </Show>
    </Box>
  )
}
