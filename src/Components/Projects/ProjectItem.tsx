import React, { useRef } from 'react'
import {Flex,Text, Box} from "@chakra-ui/react"
import themeColor from '../../utils/Colors'
import TechStackIte from './TechStackIte'
import Links from './Links'
import { useInView} from "framer-motion"
import {insideview, outside}  from '../style/style'

export default function ProjectItem({project}:{project:any}) {
  const ref = useRef(null)
  const invieRef = useInView(ref)
  
  return (
    <Box
      style={invieRef?insideview:outside} 
      ref={ref} 
      borderRadius="15px" 
      bg={themeColor().transparentBG}
      p="20px"
      h="100%"
      minH="350px"
      boxShadow={`0 4px 12px ${themeColor().shadowColor}`}
      _hover={{ boxShadow: `0 8px 20px ${themeColor().shadowColor}`, transform: "translateY(-3px)", transition: "all 0.3s" }}
      display="flex"
      flexDirection="column"
    >
      {/* Project Content */}
      <Box flex="1" display="flex" flexDirection="column">
        <Text 
          fontFamily={'PT Serif, serif'} 
          color={themeColor().color1} 
          fontSize={["1.1em","1.2em","1.3em","1.4em"]} 
          fontWeight="700"
          mb="10px"
        >
          {project.projectTitle}
        </Text>

        <Text 
          color={themeColor().color1} 
          fontSize={["0.85em", "0.9em", "0.95em", "1em"]} 
          lineHeight="1.6" 
          mb="15px"
          flex="1"
          noOfLines={[4, 5, 6, 6]}
        >
          {project.description}
        </Text>
        
        <Flex flexWrap="wrap" gap="6px" mb="12px">
          {project.techstack && project.techstack.slice(0, 4).map((tech:any)=>{
            return (
              <Box key={tech.id}>
                <TechStackIte title={tech.title} img={tech.image}/>
              </Box>
            )
          })}
          {project.techstack && project.techstack.length > 4 && (
            <Box fontSize="0.8em" color={themeColor().color2} px="8px" py="4px">
              +{project.techstack.length - 4} more
            </Box>
          )}
        </Flex>
        
        {project.links && project.links.length > 0 && (
          <Flex flexWrap="wrap" gap="10px" mt="auto">
            {project.links.map((link:any)=>{
              return (
                <Box key={link?.linkTitle}>
                  <Links title={link.linkTitle} link={link.link}/>
                </Box>
              )
            })}
          </Flex>
        )}
      </Box>
    </Box>
  )
}
