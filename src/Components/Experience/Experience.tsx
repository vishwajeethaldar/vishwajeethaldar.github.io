import { Box, Text, Flex, VStack, HStack, Badge } from '@chakra-ui/react'
import { useRef } from 'react'
import themeColor from '../../utils/Colors'
import { useInView } from 'framer-motion'
import { insideview, outside } from '../style/style'
import { MdWork } from 'react-icons/md'

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "WLC Technology",
    duration: "2023 - Present",
    description: "Software Developer at WLC Technology (2023 - Present), working across full-stack MERN development, third-party API integrations, scalable backend services, and modern frontend UI development in collaborative, cross-functional project environments.",
    current: true
  },
  {
    id: 2,
    title: "Technical Staff",
    company: "Shaheed Mahendra Karma University, Bastar, C.G., India",
    duration: "2021-2022",
    description: "Served as Technical Staff, Website content updates, handling system and network maintenance for the university.",
    current: false
  },
  {
    id: 3,
    title: "Mobilizer",
    company: "Aisect PMKK Kanker, C.G.",
    duration: "2018-2021",
    description: "Responsible for mobilizing candidates for Central Govt. skill development programs and handling computer hardware, software, and network maintenance and troubleshooting.",
    current: false
  },
  {
    id: 4,
    title: "CSO",
    company: "Mphasis",
    duration: "2013-2015",
    description: "Served as a Customer Support Officer",
    current: false
  }
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Box id="experience" minH="500px" py="100px" w={["95%", "90%", "85%", "80%"]} mx="auto" maxW="1200px">
      <Box mb="60px" textAlign="center">
        <Text 
          fontFamily={'PT Serif, serif'} 
          color={themeColor().color1}  
          fontSize={["2em", "2.5em", "3em", "3.5em"]} 
          fontWeight="700"
          mb="10px"
        >
          Experience
        </Text>
        <Box w="60px" h="4px" bg={themeColor().color2} mx="auto" borderRadius="2px"></Box>
      </Box>

      <Box 
        ref={ref}
        style={inView ? insideview : outside}
        position="relative"
        px={["0", "0", "50px", "80px"]}
      >
        {/* Central Timeline Line */}
        <Box
          position="absolute"
          left="50%"
          top="0"
          bottom="0"
          width="3px"
          bg={themeColor().color2}
          opacity={0.3}
          transform="translateX(-50%)"
          display={["none", "none", "block", "block"]}
        />

        <VStack spacing="60px" align="stretch">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0
            const isLeft = isEven
            
            return (
              <Flex
                key={exp.id}
                position="relative"
                direction={["column", "column", isLeft ? "row" : "row-reverse", isLeft ? "row" : "row-reverse"]}
                align="center"
                gap="30px"
              >
                {/* Timeline Dot */}
                <Box
                  position="absolute"
                  left={["50%", "50%", "50%", "50%"]}
                  top="20px"
                  width="20px"
                  height="20px"
                  borderRadius="50%"
                  bg={exp.current ? themeColor().color2 : themeColor().color3}
                  border={`4px solid ${themeColor().bgColor}`}
                  zIndex={2}
                  transform="translateX(-50%)"
                  display={["none", "none", "block", "block"]}
                  boxShadow={`0 0 0 6px ${themeColor().color2}40`}
                />

                {/* Content Card */}
                <Box
                  w={["100%", "100%", "45%", "45%"]}
                  p="30px"
                  borderRadius="20px"
                  bg={themeColor().transparentBG}
                  border={`2px solid ${themeColor().color2}`}
                  boxShadow={`0 8px 20px ${themeColor().shadowColor}`}
                  _hover={{ 
                    boxShadow: `0 12px 30px ${themeColor().shadowColor}`, 
                    transform: "translateY(-5px)", 
                    transition: "all 0.3s" 
                  }}
                  ml={["0", "0", isLeft ? "0" : "auto", isLeft ? "0" : "auto"]}
                  mr={["0", "0", isLeft ? "auto" : "0", isLeft ? "auto" : "0"]}
                >
                  <HStack mb="15px" flexWrap="wrap" gap="10px">
                    <Badge 
                      colorScheme={exp.current ? "blue" : "gray"} 
                      fontSize="0.9em"
                      px="12px"
                      py="6px"
                      borderRadius="8px"
                    >
                      {exp.duration}
                    </Badge>
                    {exp.current && (
                      <Badge colorScheme="green" fontSize="0.8em" px="10px" py="5px">
                        Current
                      </Badge>
                    )}
                  </HStack>

                  <Flex align="center" gap="12px" mb="12px">
                    <MdWork color={themeColor().color2} size="24px" />
                    <Text 
                      fontSize={["1.3em", "1.4em", "1.5em", "1.6em"]} 
                      fontWeight="700" 
                      color={themeColor().color1}
                      fontFamily={'PT Serif, serif'}
                    >
                      {exp.title}
                    </Text>
                  </Flex>

                  <Text 
                    fontSize={["1.0em", "1.1em", "1.15em"]} 
                    fontWeight="600" 
                    color={themeColor().color2}
                    mb="15px"
                  >
                    {exp.company}
                  </Text>

                  <Text 
                    fontSize={["0.95em", "1.0em", "1.05em"]} 
                    color={themeColor().color1}
                    lineHeight="1.7"
                  >
                    {exp.description}
                  </Text>
                </Box>

                {/* Spacer for opposite side */}
                <Box w={["0", "0", "45%", "45%"]} display={["none", "none", "block", "block"]} />
              </Flex>
            )
          })}
        </VStack>
      </Box>
    </Box>
  )
}
