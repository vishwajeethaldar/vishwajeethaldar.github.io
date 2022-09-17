import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LikeContainer } from './LikeContainer'

import { LinkItem } from './LinkItem'
import { ProjectImageSilde } from './ProjectImageSilde'
import { ReferenceLinks } from './ReferenceLinks'

export const Project = ({project, links=[]}) => {
  
  return (
   
      <Flex w="100%" direction={["column","column","row","row"]} my={"10px"} p="10px" boxShadow={["2px 1px 1px #ccc,  -1px -1px 1px #ccc"]} borderRadius={"5px"}>
          <Box w={["100%","100%","50%","50%"]} px={["10px","10px","30px","30px"]}>
            <Text fontSize={["1.4em"]} fontWeight={["700"]} py="15px">
              {project.projectTitle}
            </Text>
             {/* <Text> Tech Stack</Text>  */}
            <Flex wrap={"wrap"} w="100%" justify={"flex-start"}  gap={"20px"} align={"center"}>
            {project.techstack.map((tech)=>{
              return (
                  <Flex  gap="10px" direction={"column"} align="center" justify={"center"} key={tech.id}>
                    <Box p="10px" boxShadow={"lg"}  borderRadius={"7px"} w="50px" h={"50px"}> 
                      <Image src={tech.image} w={["100%","100%","100%","100%"]} h={["100%"]}/>
                    </Box>

                    <Box>
                      <Text> 
                      {tech.title}
                      </Text>
                    </Box>
                  </Flex> 
              )
            })}
            </Flex>

            <Box py="20px">
                {project.description}
            </Box>

            <Flex gap="10px" wrap={"wrap"}>
              {
                  links.map((link)=>{
                    return (
                      <a href={link.link} target={"_blank"} key={link.link}>
                        <Button variant={"outline"} outline={"1px solid #63CACC"} px={"10px"}w={[""]}>
                          <Text fontSize={[".9em",".9em","1.1em","1.1em"]}>
                          {link.linkTitle}
                          </Text>
                      </Button>
                      </a>
                    )
                  })
                }
            </Flex>
           </Box>
          
          <Box w={["100%","100%","50%","50%"]}  my={"25px"}>            
              <ProjectImageSilde images={project.images}/>
          <Flex>
            {/* {project.links.map((item)=>{
                  return (
                      <a href={item.link} >
                          <Button>
                              {item.linkTitle}
                          </Button>
                      </a>
                  )
            })} */}
              
          </Flex>
 
          </Box>
      </Flex>
   
  )
}
