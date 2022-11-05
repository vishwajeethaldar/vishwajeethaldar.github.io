import React, { useRef } from 'react'
import {Flex,Text, Box} from "@chakra-ui/react"
import themeColor from '../../utils/Colors'
import TechStackIte from './TechStackIte'
import Links from './Links'
import ProjectImages from './ProjectImages'
import { useInView} from "framer-motion"
import {insideview, outside}  from '../style/style'

export default function ProjectItem({project}:{project:any}) {
  const ref = useRef(null)
  const invieRef = useInView(ref)
  return (
    <Flex style={invieRef?insideview:outside} ref={ref} borderRadius={["10px 10px 00px 0px","10px 10px 0px 0px","50px 0px 50px 0px","50px 0px 50px 0px"]} gap={"10px"} align={["center","center","center","center"]}  justify={["center","center","center","center"]}     minW={"100%"}  direction={["column","column","row",'row']} border={`1px solid ${themeColor().color2}`} pb={["10px","10px","0px","0px"]}>
                    <Box w={["90%","90%","40%","40%"]} pt={"20px"}>
                        
                        <Box  mb={"10px"} w={["96%", "96%", "80%", "80%"]} >
                                <Text fontFamily={'PT Serif, serif'} textTransform={"lowercase"} color={themeColor().color1} display={"inline-block"} borderBottom={"3px solid #ccc"}  fontSize={["1.2em","1.2em","1.6em","1.6em"]} fontWeight={"700"}>
                                        {project.projectTitle}
                                </Text>
                        </Box>

                        <Box py="10px" color={themeColor().color1}>
                            {project.description}
                        </Box>
                        
                        <Flex py="10px" flexWrap={"wrap"} gap={"10px"}>
                            {project.techstack.map((tech:any)=>{
                                return (
                                    <Box key={tech.id} >
                                        <TechStackIte title={tech.title} img={tech.image}/>
                                    </Box>
                                )
                            })}
                        </Flex>
                        
                        <Flex py={["0px","0px","10px","10px"]} flexWrap={"wrap"} gap={"10px"}>
                            {project.links.map((link:any)=>{
                                return (
                                    <Box key={link?.linkTitle}  h={"100px"}>
                                        <Links title={link.linkTitle} link={link.link}/>
                                    </Box>
                                )
                            })}
                        </Flex>
                        
                    </Box>

                    <Flex  justify={"center"} align={"center"} w={["100%","100%","50%","50%"]} px={["10px","10px", "0px","0px"]}>
                        <ProjectImages image={project.images} />
                    </Flex>

                </Flex>
  )
}
