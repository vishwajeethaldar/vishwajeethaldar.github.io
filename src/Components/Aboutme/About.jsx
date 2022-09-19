import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
   <Flex  w="100%" justify={"center"} direction={"column"}>
        <Flex z-indexd={0} position={"relative"} w="100%" justify={"center"} align="center" gap="15px" pt="25px">
            <Box w={["30%","30%","35%","40%"]} borderTop={"3px double #bbb"} >

            </Box>

            <Box>
                <Text fontSize={["1.4em","1.4em", "2.0em","2.4em"]}> About Me</Text>
            </Box>

            <Box w={["30%","30%","35%","40%"]}  borderTop={"3px double #bbb"}>
            </Box>
        </Flex>

        <Box w={["100%"]} px={["9%", "9%" ,"14%", "20%"]} py="20px">
                <Text align={"center"} fontSize={["1.2em"]}>
                Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled in MERN Stack,proficient in working with teams and executing goal-oriented projects. Looking forward to joining a progressive and challenging work environment.
                </Text>
        </Box>
   </Flex>
  )
}
