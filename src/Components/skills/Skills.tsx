import { Box,Text, Flex } from '@chakra-ui/react'
import React,{useRef} from 'react'
import themeColor from '../../utils/Colors'
import Calender from '../github/Calender'
import Stats from '../github/Stats'
import { Sikllitem } from './SkillItem'
import {frontEnd, backEnd, tools} from './Slist'
import { useInView } from 'framer-motion'
import { insideview, outside } from '../style/style'

export default function Skills() {

    const frontEndRef = useRef(null)
    const backEndRef = useRef(null)
    const tootdRef = useRef(null)
    const gitCalRef = useRef(null)
    const gitstateRef = useRef(null)

    const frontEndRefView = useInView(frontEndRef)
    const backEndRefView = useInView(backEndRef)
    const tootdRefView = useInView(tootdRef)
    const gitCalRefView = useInView(gitCalRef)
    const gitstateRefView = useInView(gitstateRef)

  return (
    <Box>
        <Box fontFamily={'PT Serif, serif'} py="10px" textAlign={"center"} as='h1' fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"} color={themeColor().color1}>
           {` Skills & Interests`}
        </Box>

        <Box mx={"auto"} pb={"15px"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
            <Text fontFamily={'PT Serif, serif'} color={themeColor().color1} display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
                Frontend 
            </Text>
       </Box>


       <Flex ref={frontEndRef} style={frontEndRefView?insideview:outside} mb={"10px"} justify={"flex-start"} mx={"auto"} gap={["15xp", "15px", "5px", "5px"]} w={["96%", "96%", "80%", "80%"]} flexWrap="wrap">
        {frontEnd.map((skill)=>{
            return (
              <Box _hover={{transform:"scale(.98)", boxShadow:"1px 1px 2px #523"}} transition={"all .16s  linear"}  key={skill.id} w={["25%","22%","15%","10%"]} borderRadius={"10px"}  boxShadow={`0px 0px 3px ${themeColor().color2}`} mx="1%" my="2%">
                <Sikllitem image={skill.image} title={skill.title} url={skill.url} />
              </Box>
            )
        })}
        </Flex> 

       <Box mx={"auto"}  w={["96%", "96%", "80%", "80%"]} pb={"15px"} px={["15xp", "15px", "20px", "10px"]}>
            <Text fontFamily={'PT Serif, serif'} color={themeColor().color1} display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
                Backend 
            </Text>
       </Box>

       <Flex ref={backEndRef} style={backEndRefView?insideview:outside} mb={"10px"} justify={"flex-start"} mx={"auto"} gap={["15xp", "15px", "5px", "5px"]} w={["96%", "96%", "80%", "80%"]} flexWrap="wrap">
        {backEnd.map((skill)=>{
            return (
              <Box _hover={{transform:"scale(.98)", boxShadow:"1px 1px 2px #523"}} transition={"all .16s  linear"}  key={skill.id} w={["25%","22%","15%","10%"]} borderRadius={"10px"}  boxShadow={`0px 0px 3px ${themeColor().color2}`} mx="1%" my="2%">
                <Sikllitem image={skill.image} title={skill.title} url={skill.url} />
              </Box>
            )
        })}
        </Flex> 



       <Box mx={"auto"}  w={["96%", "96%", "80%", "80%"]} pb={"15px"} px={["15xp", "15px", "20px", "10px"]}>
            <Text fontFamily={'PT Serif, serif'} color={themeColor().color1} display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
                Tools  
            </Text>
       </Box>

       <Flex ref={tootdRef} style={tootdRefView?insideview:outside} mb={"10px"} justify={"flex-start"} mx={"auto"} gap={["15xp", "15px", "5px", "5px"]} w={["96%", "96%", "80%", "80%"]} flexWrap="wrap">
        {tools.map((skill)=>{
            return (
              <Box _hover={{transform:"scale(.98)", boxShadow:"1px 1px 2px #523"}} transition={"all .16s  linear"}  key={skill.id} w={["25%","20%","13%","10%"]} borderRadius={"10px"}  boxShadow={`0px 0px 3px ${themeColor().color2}`} mx="1%" my="2%">
                <Sikllitem image={skill.image} title={skill.title} url={""} />
              </Box>
            )
        })}
        </Flex> 



       <Box  textAlign={"center"} mx={"auto"} mb={"30px"} w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]} >
            <Text fontFamily={'PT Serif, serif'} color={themeColor().color1} display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
                GitHub Stats  
            </Text>
       </Box>

       <Flex ref={gitCalRef} style={gitCalRefView?insideview:outside}  justify={"center"} mb={"10px"} mx={"auto"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
        <Calender/>
       </Flex>

       <Box ref={gitstateRef} style={gitstateRefView?insideview:outside}  mb={"20px"} mx={"auto"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
          <Stats />
       </Box>
       
    </Box>
  )
}
