import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { ProjectImageSilde } from './ProjectImageSilde'
export const Project = ({project, links=[]}) => {
  let slide = useRef(null)

  const stopSlide = ()=>{
    clearInterval(slide.current);
    slide.current=null;
  }
  
  const startSlide = (images, count, setCount)=>{
    if(slide.current===null){
      slide.current = setInterval(()=>{
        setCount(count=>count===images.length-1?0:count+1)
      }, 2000)
    }
  }

  useEffect(()=>{
    // startSlide(project.images)
  },[])
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
                      <Image src={tech.image} w={["100%","100%","100%","100%"]} h={["100%"]} _hover={{transform:"scale(1.2)", cursor:"pointer"}} transition={".1s all linear"}/>
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
                        <Button _hover={{transform:"scale(.95)"}} variant={"outline"} outline={"1px solid #63CACC"} px={"10px"}w={[""]}>
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
              <ProjectImageSilde images={project.images} startSlide={startSlide} stopSlide={stopSlide}/>
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
