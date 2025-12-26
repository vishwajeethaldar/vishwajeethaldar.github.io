import {Box,Text, Flex, Image} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import themeColor from '../../utils/Colors'
import Download from './Download'
import Type from './Type'
import { motion, useScroll, useInView} from "framer-motion"
import {insideview, outside}  from '../style/style'


export default function About() {
  const scrollRef = useRef(null)
  let ref = useRef(null)
  let ref2 = useRef(null)
  let inview = useInView(ref)
  let inview2 = useInView(ref2)

  useEffect(()=>{
      console.log(inview); 
  },[inview])
  
  return (
    <Box minH={"100vh"} display="flex" flexDirection="column" justifyContent="center" id="home">
      {/* Hero Section */}
      <Box style={inview?insideview:outside} minH="90vh" display="flex" alignItems="center" justifyContent="center" px={["20px", "30px", "50px", "100px"]} py="80px">
        <Flex ref={ref} w="100%" maxW="1200px" direction={["column", "column", "row", "row"]} align="center" justify="center" gap={["40px", "50px", "80px", "100px"]}>
          {/* Text Content */}
          <Box flex="1" textAlign={["center", "center", "left", "left"]}>
            <Text 
              fontFamily={'PT Serif, serif'}  
              color={themeColor().color1} 
              fontSize={["2.5em", "3em", "3.5em", "4em"]} 
              fontWeight="700"
              mb="20px"
              lineHeight="1.2"
            >
              Hi, I'm <br/>
              <Text as="span" color={themeColor().color2}>Vishwajeet Haldar</Text>
            </Text>

            <Box color={themeColor().color1} fontSize={["1.2em", "1.4em", "1.6em", "1.8em"]} mb="30px" minH="60px">
              <Type />
            </Box>
            
            <Box py="20px">
              <Download/>
            </Box>
          </Box>

          {/* Profile Image */}
          <Box flex="0 0 auto" w={["250px", "300px", "400px", "450px"]}>
            <Box
              position="relative"
              borderRadius="20px"
              overflow="hidden"
              boxShadow={`0 10px 40px ${themeColor().shadowColor}`}
              _hover={{ transform: "translateY(-5px)", transition: "all 0.3s ease" }}
            >
              <Image 
                w="100%" 
                borderRadius="20px"
                src={`img/profile.png`}
                alt="Vishwajeet Haldar"
              />
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* About Section */}
      <Flex style={inview2?insideview:outside} ref={ref2} id="about" w={["95%", "90%", "85%", "80%"]} mx="auto" direction="column" py="100px" gap="50px">
        <Box textAlign="center">
          <Text 
            fontSize={["2em", "2.5em", "3em", "3.5em"]} 
            color={themeColor().color1}
            fontWeight="700"
            fontFamily={'PT Serif, serif'}
            mb="10px"
          >
            About Me
          </Text>
          <Box w="60px" h="4px" bg={themeColor().color2} mx="auto" borderRadius="2px"></Box>
        </Box>

        <Flex direction={["column", "column", "row", "row"]} gap="50px" align="center">
          <Box flex="1" order={[2, 2, 1, 1]} maxW={["100%", "100%"]}>
            <Text 
              color={themeColor().color1} 
              fontSize={["1em", "1.1em", "1.15em", "1.2em"]} 
              lineHeight="1.9"
              textAlign={["center", "center", "left", "left"]}
            >
              Software Developer with 3 years of experience specializing in full-stack web development using the MERN stack. Skilled in building scalable backend services with Node.js, integrating complex third-party APIs, and developing clean, responsive user interfaces. Experienced in contributing to Salesforce projects and collaborating effectively within cross-functional teams. Passionate about writing maintainable code and delivering impactful, high-quality software solutions.
            </Text>
          </Box>
          <Box flex="0 0 350px" order={[1, 1, 2, 2]} display="flex" justifyContent="center">
            <Image 
              w="100%" 
              maxW="350px"
              borderRadius="15px" 
              border={`2px solid ${themeColor().shadowColor2}`}  
              src={`img/profile.png`}  
              boxShadow={`0 8px 20px ${themeColor().shadowColor}`}
              _hover={{ transform: "scale(1.02)", transition: "all 0.3s" }}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
