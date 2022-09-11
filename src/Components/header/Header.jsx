import { Box, Flex, Stack } from '@chakra-ui/react'
import { BrandName } from './BrandName'
import { Navmenus } from './Navmenus'
import {MenuToggleBtn} from './MenuToggleBtn'
import { useState } from "react";


export const Header = () => {

  const [showmenu, setshowMenu] =  useState(false)
  return (
    <Stack w={["94%", "94%", "96%", "96%"]} mx={"auto"}>
      <Flex w="100%" py="15px" align={"center"} justify={["space-between"]}> 

        {/* Brand Text Webiste Name */}
          <Box>
            <BrandName brandName={"Vishwajeet Haldar"} size={{base:"1.2px", sm:"1.2em", md:"1.4em", lg:"1.6em"}} />
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
     <Box display={[showmenu===false?"none":"block",showmenu===false?"none":"block", "none", "none"]}>
          <Navmenus diection={"column"}/>
      </Box>

    </Stack>
  )
}
