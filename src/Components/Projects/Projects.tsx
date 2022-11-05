import { Box, Button, Flex, Image, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import themeColor from '../../utils/Colors'
import { Sikllitem } from '../skills/SkillItem'
import Links from './Links'
import ProjectImages from './ProjectImages'
import projectslist from "./projectinformation"
import TechStackIte from './TechStackIte'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai"

import ProjectItem from './ProjectItem'

export default function Projects() {
    const [projectNo, setProjectNo] =  useState(0)

    const nextProject = ()=>{
        if(projectNo===projectslist.length-1){
            setProjectNo(0)
        }else{
            setProjectNo(projectNo=>projectNo+1)
        }
    }

    const prevProject = ()=>{
        if(projectNo===0){
            setProjectNo(projectslist.length-1)
        }else{
            setProjectNo(projectNo=>projectNo-1)
        }
    }
  return (
    <Box  w={["100%","100%","100%","100%"]} boxShadow={`1px 1px 3px ${themeColor().shadowColor}, -1px -1px 3px ${themeColor().shadowColor}`}  mx={"auto"} position={'relative'} mb={"50px"} pb={"10px"}>
       
        <Box mx={"auto"} mb={"20px"} w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
            <Text fontFamily={'PT Serif, serif'} py={"15px"} textAlign={"center"}color={themeColor().color1}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
                    {"Projects"}
            </Text>
        </Box>

        <Flex overflow={"hidden"} direction={"column"} mx={"30px"} gap={"20px"} >
                {
                    projectslist.map((project, i)=>{
                return (
                        <ProjectItem project={project} key={project.id}/>
                        )
                    })
                }
            
        </Flex>

        {/* Left Right Swaipe Button */}

        
                
        {/* 
        <Flex justify={"center"} py={"15px"} gap={"10px"}  pb={"10px"}>
        
            <Box>
                <Button px={"0"} borderRadius={"2px"} color={'#fff'} fontWeight={"900"}  colorScheme={"linkedin"} _hover={{color:"orange"}} onClick={prevProject}>
                    <AiOutlineDoubleLeft/>
                </Button>
            </Box>
            {projectslist.map((project, i)=>{
                return (
                    <Button onClick={()=>setProjectNo(i)} disabled={i===projectNo} borderRadius={"2px"} key={project.id} colorScheme={"yellow"} variant={"outline"}>
                       {i+1}
                    </Button>
                )
            })}
            <Box>
                <Button  px={"0"} borderRadius={"2px"} color={'#fff'} fontWeight={"900"}  colorScheme={"linkedin"} _hover={{color:"orange"}} onClick={nextProject}>
                    <AiOutlineDoubleRight/>
                </Button>
            </Box>
        </Flex>
         */}
        
    </Box>
  )
}
