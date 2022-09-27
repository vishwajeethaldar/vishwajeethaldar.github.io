import GitHubCalendar from 'react-github-calendar';
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Sikll } from './Sikll'
import * as skill from "./skilllist"
export const Skills = () => {
  return (
    
    <Box w="100%">
        <Box py="50px" textAlign={"center"} as='h1' fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
           {` Skills & Interests`}
        </Box>
       
       <Box mx={"auto"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
        <Text display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
            FrontEnd 
        </Text>
       </Box>

       <Flex mb={"30px"} justify={"flex-start"} mx={"auto"} gap={["15xp", "15px", "20px", "20px"]} w={["96%", "96%", "80%", "80%"]} flexWrap="wrap">
        {skill.frontEnd.map((skill)=>{
            return (
              <Box _hover={{transform:"scale(.98)", boxShadow:"1px 1px 3px #523"}} transition={"all .16s  linear"}  key={skill.id} w={["30%","30%","15%","12%"]}  boxShadow={"0px 0px 8px #ccc"} mx="1%" my="2%">
                <Sikll image={skill.image} title={skill.title} url={skill.url} />
              </Box>
            )
        })}
        </Flex> 

        <Box mx={"auto"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
        <Text display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
            BackEnd 
        </Text>
       </Box>

       <Flex mb={"30px"} justify={"flex-start"} mx={"auto"} gap={["15xp", "15px", "20px", "20px"]} w={["96%", "96%", "80%", "80%"]} flexWrap="wrap">
        {skill.backEnd.map((skill)=>{
            return (
              <Box  _hover={{transform:"scale(.98)", boxShadow:"1px 1px 3px #523"}} transition={"all .16s  linear"} key={skill.id} w={["30%","30%","15%","12%"]}  boxShadow={"0px 0px 8px #ccc"} mx="1%" my="2%">
                <Sikll image={skill.image} title={skill.title} url={skill.url} />
              </Box>
            )
        })}
        </Flex>

        <Box mx={"auto"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
        <Text display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
            Tools 
        </Text>
       </Box>

       <Flex justify={"flex-start"} mx={"auto"} gap={["15xp", "15px", "20px", "20px"]} w={["96%", "96%", "80%", "80%"]} mb={"30px"} flexWrap="wrap">
        {skill.tools.map((skill)=>{
            return (
              <Box _hover={{transform:"scale(.98)", boxShadow:"1px 1px 3px #523"}} transition={"all .16s  linear"}  key={skill.id} w={["30%","30%","15%","12%"]}  boxShadow={"0px 0px 8px #ccc"} mx="1%" my="2%">
                <Sikll image={skill.image} title={skill.title} url={skill.url} />
              </Box>
            )
        })}
        </Flex>

        <Box mx={"auto"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
        <Text display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
            Github Calender 
        </Text>
       </Box>
        <Box py={"20px"} boxShadow={"outline"} mt={"25px"} mx={"auto"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
            <GitHubCalendar username='vishwajeethaldar' />
        </Box>
    </Box>
       
    
  )
}
