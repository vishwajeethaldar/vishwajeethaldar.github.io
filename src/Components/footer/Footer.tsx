import {Box, Flex, Text, useColorModeValue} from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import themeColor from "../../utils/Colors"
import {menuslist} from '../Nav/Menus'
import { SocialLink } from "./SocialLink"

export const Footer = () => {
 
 
  return (
    <Flex borderTop={"1px solid #ccc"} bg={themeColor().footerBgColor} direction={"column"} align="center" w={"100%"} mt="50px" gap="20px" pt="50px" >
        <Box>
          <SocialLink/>
        </Box>
        <Flex direction="row" gap={"20px"}>
            {menuslist?.map((menu)=>{
               return  <a href={`#${menu.id}`}> <Text _hover={{color:"red"}} color={themeColor().color1}> {menu.name} </Text></a>
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
