import {Box, Flex} from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <Flex direction={"column"} align="center" w={"96%"} gap="20px">
        <Flex direction="row" gap={"20px"}>
            <Link to="/"> Home </Link>
            <Link to="/"> Skills </Link>
            <Link to="/"> Projects </Link>
            <Link to="/"> Contact </Link>
        </Flex>
        <Box>
           Copyright  &copy; 2022 all rights reserved 
        </Box>
    </Flex>
  )
}
