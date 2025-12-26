import { Box,Text, Flex } from '@chakra-ui/react'
import React,{useRef} from 'react'
import themeColor from '../../utils/Colors'
import Calender from '../github/Calender'
import { Sikllitem } from './SkillItem'
import {frontEnd, backEnd, database, apiWork, integrations, tools, other} from './Slist'
import { useInView } from 'framer-motion'
import { insideview, outside } from '../style/style'

export default function Skills() {

    const frontEndRef = useRef(null)
    const backEndRef = useRef(null)
    const databaseRef = useRef(null)
    const apiWorkRef = useRef(null)
    const integrationsRef = useRef(null)
    const toolsRef = useRef(null)
    const otherRef = useRef(null)
    const gitCalRef = useRef(null)

    const frontEndRefView = useInView(frontEndRef)
    const backEndRefView = useInView(backEndRef)
    const databaseRefView = useInView(databaseRef)
    const apiWorkRefView = useInView(apiWorkRef)
    const integrationsRefView = useInView(integrationsRef)
    const toolsRefView = useInView(toolsRef)
    const otherRefView = useInView(otherRef)
    const gitCalRefView = useInView(gitCalRef)

  const renderSkillCategory = (title: string, skills: any[], ref: any, inView: boolean, mb: string = "50px") => (
    <>
      <Box mb="20px">
        <Text fontFamily={'PT Serif, serif'} color={themeColor().color1} fontSize={["1.3em","1.5em","1.8em","2em"]} fontWeight="600" mb="15px">
          {title}
        </Text>
      </Box>
      <Box 
        ref={ref} 
        style={inView?insideview:outside} 
        mb={mb}
        p="25px"
        borderRadius="15px"
        bg={themeColor().transparentBG}
        border={`2px solid ${themeColor().shadowColor2}`}
        boxShadow={`0 4px 12px ${themeColor().shadowColor}`}
        _hover={{
          boxShadow: `0 8px 20px ${themeColor().shadowColor}`,
          transform: "translateY(-2px)",
          transition: "all 0.3s"
        }}
      >
        <Flex gap={["10px", "12px", "10px", "12px"]} flexWrap="wrap">
          {skills.map((skill)=>{
            return (
              <Box
                as="a"
                href={skill.url}
                target="_blank"
                rel="noreferrer"
                _hover={{
                  color: themeColor().color2,
                  transform: "scale(1.05)"
                }} 
                transition="all .2s ease" 
                key={skill.id} 
                px="15px"
                py="8px"
                borderRadius="8px" 
                bg={themeColor().bgColor}
                border={`1px solid ${themeColor().shadowColor2}`}
                cursor="pointer"
                display="inline-block"
              >
                <Text 
                  color={themeColor().color1} 
                  fontSize={["0.85em", "0.9em", "0.95em", "1em"]}
                  fontWeight="500"
                  whiteSpace="nowrap"
                >
                  {skill.title}
                </Text>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </>
  )

  return (
    <Box py="100px" w={["95%", "90%", "85%", "80%"]} mx="auto" maxW="1200px">
        <Box mb="60px" textAlign="center">
          <Text fontFamily={'PT Serif, serif'} fontSize={["2em", "2.5em", "3em", "3.5em"]} fontWeight="700" color={themeColor().color1} mb="10px">
            Skills & Technologies
          </Text>
          <Box w="60px" h="4px" bg={themeColor().color2} mx="auto" borderRadius="2px"></Box>
        </Box>

        {renderSkillCategory("Frontend", frontEnd, frontEndRef, frontEndRefView)}
        {renderSkillCategory("Backend", backEnd, backEndRef, backEndRefView)}
        {renderSkillCategory("Database", database, databaseRef, databaseRefView)}
        {renderSkillCategory("API Work", apiWork, apiWorkRef, apiWorkRefView)}
        {renderSkillCategory("Integrations", integrations, integrationsRef, integrationsRefView)}
        {renderSkillCategory("Tools & DevOps", tools, toolsRef, toolsRefView)}
        {renderSkillCategory("Other Experience", other, otherRef, otherRefView)} 



       <Box textAlign="center" mb="40px" mt="60px">
          <Text fontFamily={'PT Serif, serif'} color={themeColor().color1} fontSize={["1.8em","2em","2.5em","3em"]} fontWeight="700" mb="10px">
            GitHub Activity  
          </Text>
          <Box w="60px" h="4px" bg={themeColor().color2} mx="auto" borderRadius="2px"></Box>
       </Box>

       <Flex ref={gitCalRef} style={gitCalRefView?insideview:outside}  justify={"center"} mb={"20px"} mx={"auto"}  w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
        <Calender/>
       </Flex>
       
    </Box>
  )
}
