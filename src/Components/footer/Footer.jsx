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
            <Link to="/"> Home </Link>
            <Link to="/skills"> Skills </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/contact"> Contact </Link>
        </Flex>

        <Box borderTop={"1px solid #ccc"} w="100%">
          <Text align="center" lineHeight={"50px"}>
              Copyright  &copy; 2022 all rights reserved 
          </Text>
        </Box>
    </Flex>
  )
}
