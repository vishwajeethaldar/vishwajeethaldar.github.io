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
    <Box  minH={"450px"}>
        
      <Box style={inview?insideview:outside} backgroundImage={themeColor().bg1} backgroundSize={"cover"}>
      <Flex ref={ref} bg={`${themeColor().transparentBG}`} py="30px"  w="100%" justify={"center"} align="center" gap={["10px", "10px","100px","150px"]}   >
              
              <Box pl="20px"  p="30px" borderRadius={"20px"}>
                      <Flex direction={"column"} gap={"10px"}>
                      
                      <Text fontFamily={'PT Serif,serif'}  color={themeColor().color4} fontSize={["1.4em","1.4em", "2.4em"]} >
                          Hi, I am <br/>
                          Vishwajeet Haldar
                      </Text>

                      <Box color={themeColor().color4}>
                        <Type />
                      </Box>
                      
                    <Box py="15px" position={"relative"} zIndex="0">
                        {/* <DonwloadLink path={pdf} title={"Resume"}/> */}
                        <Download/>
                    </Box>
                  </Flex>

              </Box>

              <Box w={["180px", "180px", "420px"]} borderRadius={"50%"} pr={["20px","20px","",""]} backdropFilter={"blur"} >
                  <Image w="100%" borderRadius={"50%"} border={`2px solid ${themeColor().shadowColor2}`}  src={`img/profile.png`}  bg={"rgba(1, 16, 41,.5)"}/>
              </Box>
        </Flex>
      </Box>

    <Flex  style={inview2?insideview:outside} ref={ref2} id="about" w={["96%","90%","80%","80%"]}  mx={"auto"}  justify={"center"} direction={"column"} my={"50px"}>
        <Flex z-indexd={0} position={"relative"} w="100%" justify={"center"} align="center" gap="15px" pt="25px">
            <Box w={["30%","30%","30%","30%"]} borderTop={"3px double #bbb"} >

            </Box>

            <Box id={"about"}>
                <Text fontSize={["1.4em","1.4em", "2.0em","2.4em"]} color={themeColor().color1}> About Me</Text>
            </Box>

            <Box w={["30%","30%","30%","30%"]}  borderTop={"3px double #bbb"}>
            </Box>
        </Flex>

        <Box w={["100%"]}px={["9%", "9%" ,"6%", "15%"]} py="20px">
                <Text align={"center"} color={themeColor().color1} fontSize={["1.2em"]}>
                Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled in MERN Stack,proficient in working with teams and executing goal-oriented projects. Looking forward to joining a progressive and challenging work environment.
                </Text>
        </Box>
   </Flex>
    
    </Box>
  )
}
