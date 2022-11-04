import {Box, Flex, Text, useColorModeValue} from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../Context/AppContext"
import { ReferanceLinks } from "./ReferanceLinks"

export const Footer = () => {
  const bgcolor = useColorModeValue("#ddd", "rgba(26,32,44, 0.5)")
  const {border} = useContext(AppContext)
  return (
    <Flex bg={bgcolor} direction={"column"} align="center" w={"100%"} mt="50px" gap="20px" pt="50px" borderTop={`1px solid ${border}`}>
        <Box>
          <ReferanceLinks/>
        </Box>
        <Flex direction="row" gap={"20px"}>
            <Link to="/"> <Text _hover={{color:"red"}}>Home </Text></Link>
            <Link to="/skills"> <Text _hover={{color:"red"}}>Skills </Text></Link>
            <Link to="/projects"> <Text _hover={{color:"red"}}>Projects</Text> </Link>
            <Link to="/contact"> <Text _hover={{color:"red"}}>Contact</Text> </Link>
        </Flex>

        <Box borderTop={"1px solid #ccc"} w="100%">
          <Text align="center" lineHeight={"50px"}>
              Copyright  &copy; 2022 all rights reserved 
          </Text>
        </Box>
    </Flex>
  )
}
