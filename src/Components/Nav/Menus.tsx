import { Flex, Text,Box} from '@chakra-ui/react';
import {NavLink } from 'react-router-dom'
import themeColor from '../../utils/Colors';
import {useEffect, useState} from "react"
import { FaFileExport } from 'react-icons/fa';



export const menuslist = [
  {
    name:"About",
    id:"home"
  },
  {
    name:"Skills",
    id:"skills"
  },
  {
    name:"Projects",
    id:"projects"
  },
  {
    name:"Contact",
    id:"contact"
  }
]

const Menus = ({selected, setSelected}:{selected:string, setSelected:Function}) => {
 
  let activeStyle = {
    color:themeColor().hoverColor1,
    borderBottom:"1px solid #ccc"
  };

  let inActiveStyle = {
    
  }

  const jumpToReleventDiv = (id:string) => {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv?.scrollIntoView({behavior: "smooth"});
  }



 
  return (
    <Flex color={themeColor().color1} py={"15px"} gap={"20px"} direction={["column", "column","row", "row"]} align={"center"}>

        {menuslist?.map((menu)=>{
          return (
            <Box key={menu.id}   onClick={()=>jumpToReleventDiv(menu.id)}>
              <Text fontFamily={'serif,PT Serif'} onClick={()=>setSelected(menu.id)} fontSize={["14px","16px","18px","20px"]} style={selected===menu.id?activeStyle:inActiveStyle}  _hover={{cursor:"pointer",color:themeColor().hoverColor1}}fontWeight={"500"}>
                {menu.name} 
              </Text>
            </Box>
          )
        })}

    </Flex>
  )
}

export default Menus