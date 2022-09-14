import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Sikll } from './Sikll'
import skillsList from "./skilllist"
export const Skills = () => {
  return (
    
    <Box w="100%">
        <Box py="50px" textAlign={"center"} as='h1' fontSize={["1.2em","1.4em","1.8em"]} fontWeight={"700"}>
           {` Skills & Interests`}
        </Box>
       <Flex justify={"center"} mx={"auto"} gap={["15xp", "15px", "20px", "20px"]} w={["96%", "96%", "80%", "80%"]} flexWrap="wrap">
        {skillsList.map((skill)=>{
            return (
              <Box key={skill.id} w={["200px"]} boxShadow={"xl"}>
                <Sikll image={skill.image} title={skill.title} url={skill.url} />
              </Box>
            )
        })}
        </Flex> 
    </Box>
       
    
  )
}
