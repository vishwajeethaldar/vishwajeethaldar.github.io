import { Box, Button, Flex, Image, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import themeColor from '../../utils/Colors'
import { Sikllitem } from '../skills/SkillItem'
import Links from './Links'
import ProjectImages from './ProjectImages'
import projectslist from "./projectinformation"
import TechStackIte from './TechStackIte'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai"
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

        <Flex overflow={"hidden"} px={"30px"} onScroll={()=>{

        }}>
          
                <Flex  gap={"10px"} align={["center","center","flex-start","flex-start"]}  justify={["center","center","center","center"]}     minW={"100%"} minH={"100%"} direction={["column","column","row",'row']}>
                    <Box w={["90%","90%","40%","40%"]}>
                        
                        <Box  mb={"10px"} w={["96%", "96%", "80%", "80%"]} >
                                <Text fontFamily={'PT Serif, serif'} textTransform={"lowercase"} color={themeColor().color1} display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.2em","1.2em","1.6em","1.6em"]} fontWeight={"700"}>
                                        {projectslist[projectNo].projectTitle}
                                </Text>
                        </Box>

                        <Box py="10px" color={themeColor().color1}>
                            {projectslist[projectNo].description}
                        </Box>
                        
                        <Flex py="10px" flexWrap={"wrap"} gap={"10px"}>
                            {projectslist[projectNo].techstack.map((tech)=>{
                                return (
                                    <Box key={tech.id} >
                                        <TechStackIte title={tech.title} img={tech.image}/>
                                    </Box>
                                )
                            })}
                        </Flex>
                        
                        <Flex py={["5px","5px","10px","10px"]} flexWrap={"wrap"} gap={"10px"}>
                            {projectslist[projectNo].links.map((link)=>{
                                return (
                                    <Box key={link.linkTitle}  h={"100px"}>
                                        <Links title={link.linkTitle} link={link.link}/>
                                    </Box>
                                )
                            })}
                        </Flex>
                        
                    </Box>

                    <Flex  justify={"center"} align={"center"} w={["100%","100%","50%","50%"]} h={"100%"} pb={"35px"}>
                        <ProjectImages image={projectslist[projectNo].images} />
                    </Flex>

                </Flex>
            
        </Flex>

        {/* Left Right Swaipe Button */}

        

        <Flex justify={"center"} py={"15px"} gap={"10px"} border={`1px solid ${themeColor().color4}`} pb={"10px"}>
        
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
    </Box>
  )
}
