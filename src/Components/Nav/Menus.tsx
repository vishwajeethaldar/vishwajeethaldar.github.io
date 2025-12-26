import { Flex, Text,Box} from '@chakra-ui/react';
import {NavLink } from 'react-router-dom'
import themeColor from '../../utils/Colors';
import {useEffect, useState} from "react"
import { FaFileExport } from 'react-icons/fa';



export const menuslist = [
  {
    name:"Home",
    id:"home"
  },
  {
    name:"About",
    id:"about"
  },
  {
    name:"Skills",
    id:"skills"
  },
  {
    name:"Experience",
    id:"experience"
  },
  {
    name:"Education",
    id:"education"
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
 
  const jumpToReleventDiv = (id:string) => {
    const releventDiv = document.getElementById(id);
    releventDiv?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Flex 
      color={themeColor().color1} 
      gap={["15px", "20px", "25px", "30px"]} 
      direction={["column", "column","row", "row"]} 
      align="center"
    >
        {menuslist?.map((menu)=>{
          const isActive = selected === menu.id
          return (
            <Box 
              key={menu.id} 
              onClick={()=>{
                jumpToReleventDiv(menu.id)
                setSelected(menu.id)
              }}
              position="relative"
            >
              <Text 
                fontFamily={'PT Serif, serif'} 
                fontSize={["16px","17px","16px","17px"]} 
                fontWeight={isActive ? "600" : "500"}
                color={isActive ? themeColor().color2 : themeColor().color1}
                cursor="pointer"
                position="relative"
                _hover={{ 
                  color: themeColor().color2,
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s ease"
                _after={isActive ? {
                  content: '""',
                  position: "absolute",
                  bottom: "-5px",
                  left: "0",
                  right: "0",
                  height: "2px",
                  bg: themeColor().color2,
                  borderRadius: "2px"
                } : {}}
              >
                {menu.name} 
              </Text>
            </Box>
          )
        })}

        <Box
          as="a"
          href="https://github.com/vishwajeethaldar/RESUME/raw/main/Vishwajeet-Haldar-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          px="15px"
          py="8px"
          borderRadius="8px"
          bg={themeColor().color2}
          color={themeColor().bgColor}
          _hover={{
            bg: themeColor().color3,
            transform: "translateY(-2px)",
            boxShadow: `0 4px 8px ${themeColor().shadowColor}`
          }}
          transition="all 0.2s ease"
        >
          <Text 
            fontFamily={'PT Serif, serif'} 
            fontSize={["14px","15px","14px","15px"]} 
            fontWeight="600"
          >
            Resume
          </Text>
        </Box>
    </Flex>
  )
}

export default Menus