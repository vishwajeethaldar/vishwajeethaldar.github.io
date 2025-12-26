import { Box, Text, Flex, VStack, HStack, Badge } from '@chakra-ui/react'
import { useRef } from 'react'
import themeColor from '../../utils/Colors'
import { useInView } from 'framer-motion'
import { insideview, outside } from '../style/style'
import { MdSchool } from 'react-icons/md'
import { FiAward } from 'react-icons/fi'

const education = [
  {
    id: 1,
    type: "certification",
    title: "NodeJS Developer",
    institution: "Pro5.ai",
    duration: "2024",
    description: "Certificate in NodeJS Development",
    icon: FiAward
  },
  {
    id: 2,
    type: "education",
    title: "Full Stack Web Development",
    institution: "Masai School, Bengaluru",
    duration: "2022-2023",
    description: "Intensive 1-year program focused on MERN stack development, covering frontend & backend, REST APIs, and data structures & algorithms.",
    icon: MdSchool
  },
  {
    id: 3,
    type: "education",
    title: "PGDCA",
    institution: "Dr. C.V. Raman University, Bilaspur",
    duration: "2021-2022",
    description: "Completed a 1-year postgraduate program covering core computer science fundamentals, programming, databases, operating systems, and application development.",
    icon: MdSchool
  },
  {
    id: 4,
    type: "education",
    title: "Graduation BA",
    institution: "Bastar University, Jagdalpur",
    duration: "2017-2020",
    description: "Bachelor of Arts with core studies in Sociology and Economics communication skills.",
    icon: MdSchool
  }
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Box id="education" minH="500px" py="100px" w={["95%", "90%", "85%", "80%"]} mx="auto" maxW="1200px">
      <Box mb="60px" textAlign="center">
        <Text 
          fontFamily={'PT Serif, serif'} 
          color={themeColor().color1}  
          fontSize={["2em", "2.5em", "3em", "3.5em"]} 
          fontWeight="700"
          mb="10px"
        >
          Education & Qualifications
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
          {education.map((edu, index) => {
            const isEven = index % 2 === 0
            const isLeft = isEven
            const IconComponent = edu.icon
            
            return (
              <Flex
                key={edu.id}
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
                  bg={edu.type === "certification" ? themeColor().color2 : themeColor().color3}
                  border={`4px solid ${themeColor().bgColor}`}
                  zIndex={2}
                  transform="translateX(-50%)"
                  display={["none", "none", "block", "block"]}
                  boxShadow={`0 0 0 6px ${edu.type === "certification" ? themeColor().color2 : themeColor().color3}40`}
                />

                {/* Content Card */}
                <Box
                  w={["100%", "100%", "45%", "45%"]}
                  p="30px"
                  borderRadius="20px"
                  bg={themeColor().transparentBG}
                  border={`2px solid ${edu.type === "certification" ? themeColor().color2 : themeColor().color3}`}
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
                      colorScheme={edu.type === "certification" ? "purple" : "blue"} 
                      fontSize="0.9em"
                      px="12px"
                      py="6px"
                      borderRadius="8px"
                    >
                      {edu.duration}
                    </Badge>
                    {edu.type === "certification" && (
                      <Badge colorScheme="purple" fontSize="0.8em" px="10px" py="5px">
                        Certificate
                      </Badge>
                    )}
                  </HStack>

                  <Flex align="center" gap="12px" mb="12px">
                    <IconComponent color={edu.type === "certification" ? themeColor().color2 : themeColor().color3} size="24px" />
                    <Text 
                      fontSize={["1.3em", "1.4em", "1.5em", "1.6em"]} 
                      fontWeight="700" 
                      color={themeColor().color1}
                      fontFamily={'PT Serif, serif'}
                    >
                      {edu.title}
                    </Text>
                  </Flex>

                  <Text 
                    fontSize={["1.0em", "1.1em", "1.15em"]} 
                    fontWeight="600" 
                    color={edu.type === "certification" ? themeColor().color2 : themeColor().color3}
                    mb="15px"
                  >
                    {edu.institution}
                  </Text>

                  <Text 
                    fontSize={["0.95em", "1.0em", "1.05em"]} 
                    color={themeColor().color1}
                    lineHeight="1.7"
                  >
                    {edu.description}
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
