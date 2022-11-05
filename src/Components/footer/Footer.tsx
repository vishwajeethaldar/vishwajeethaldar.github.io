import {Box, Flex, Text, useColorModeValue} from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import themeColor from "../../utils/Colors"
import {menuslist} from '../Nav/Menus'
import { SocialLink } from "./SocialLink"

export const Footer = ({selected, setSelected}:{selected:string, setSelected:Function}) => {
 
  const jumpToReleventDiv = (id:string) => {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv?.scrollIntoView({behavior: "smooth"});
  }


  return (
    <Flex borderTop={"1px solid #ccc"} bg={themeColor().footerBgColor} direction={"column"} align="center" w={"100%"} mt="50px" gap="20px" pt="50px" >
        <Box>
          <SocialLink/>
        </Box>
        <Flex direction="row" gap={"20px"}>
            {menuslist?.map((menu)=>{
               return <Box key={menu.id} onClick={()=>jumpToReleventDiv(menu.id)}>
                <Text _hover={{cursor:"pointer", color:"red"}}  color={themeColor().color1}> {menu.name} </Text>
               </Box>
            })}
        </Flex>

        <Box  w="100%">
          <Text color={themeColor().color1} align="center" lineHeight={"50px"}>
              Copyright  &copy; 2022 all rights reserved 
          </Text>
        </Box>
    </Flex>
  )
}
