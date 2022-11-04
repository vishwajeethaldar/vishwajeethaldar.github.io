import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import { Project } from './Project'
import { projectinformations } from './projectinformation'
export const Projects = () => {
  // const {bgColor} = useContext(AppContext)
  return (
    <Box w="100%" px={["30px","30px","80px","100px"]}> 
          <Flex w={"100%"} justify="center" direction={"column"}>
              {projectinformations.map((project)=>{
                    return (
                      <Box w={["100%"]} key={project.id}>
                            <Project project={project} links={project.links}/>
                      </Box>
                    )
              })}
          </Flex>
    </Box>
  )
}
