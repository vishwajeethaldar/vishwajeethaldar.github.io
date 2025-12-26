import { Box, Text, Flex, IconButton } from '@chakra-ui/react'
import React, { useRef } from 'react'
import themeColor from '../../utils/Colors'
import projectslist from "./projectinformation"
import ProjectItem from './ProjectItem'
import { useInView } from 'framer-motion'
import { insideview, outside } from '../style/style'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"

export default function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth / 3
            scrollContainerRef.current.scrollBy({ left: -cardWidth - 30, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth / 3
            scrollContainerRef.current.scrollBy({ left: cardWidth + 30, behavior: 'smooth' })
        }
    }

  return (
    <Box ref={ref} style={inView ? insideview : outside} w="100%" mx="auto" position={'relative'} py="100px">
       
        <Box mb="60px" textAlign="center" w={["95%", "90%", "85%", "80%"]} mx="auto" maxW="1280px">
            <Text fontFamily={'PT Serif, serif'} color={themeColor().color1} fontSize={["2em", "2.5em", "3em", "3.5em"]} fontWeight="700" mb="10px">
                Professional Projects
            </Text>
            <Box w="60px" h="4px" bg={themeColor().color2} mx="auto" borderRadius="2px"></Box>
        </Box>

        {/* Scrollable Cards Container */}
        <Box position="relative" w={["95%", "90%", "85%", "80%"]} mx="auto" maxW="1280px">
            {/* Left Arrow */}
            <IconButton
                aria-label="Scroll left"
                icon={<AiOutlineDoubleLeft />}
                onClick={scrollLeft}
                position="absolute"
                left="-50px"
                top="50%"
                transform="translateY(-50%)"
                zIndex={10}
                colorScheme="blue"
                variant="outline"
                size="lg"
                display={["none", "none", "flex", "flex"]}
                _hover={{ bg: themeColor().color2, color: themeColor().bgColor }}
            />

            {/* Scrollable Container */}
            <Box 
                ref={scrollContainerRef}
                overflowX="auto"
                overflowY="hidden"
                px={["10px", "15px", "20px", "20px"]}
                sx={{
                    '&::-webkit-scrollbar': {
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: themeColor().color2,
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: themeColor().color3,
                    },
                    scrollBehavior: 'smooth',
                }}
            >
                <Flex gap="25px" minW="fit-content">
                    {projectslist.map((project) => (
                        <Box 
                            key={project.id} 
                            minW={["280px", "320px", "calc((100% - 50px) / 3)", "calc((1280px - 50px) / 3)"]}
                            maxW={["280px", "320px", "calc((100% - 50px) / 3)", "calc((1280px - 50px) / 3)"]}
                            flexShrink={0}
                        >
                            <ProjectItem project={project} />
                        </Box>
                    ))}
                </Flex>
            </Box>

            {/* Right Arrow */}
            <IconButton
                aria-label="Scroll right"
                icon={<AiOutlineDoubleRight />}
                onClick={scrollRight}
                position="absolute"
                right="-50px"
                top="50%"
                transform="translateY(-50%)"
                zIndex={10}
                colorScheme="blue"
                variant="outline"
                size="lg"
                display={["none", "none", "flex", "flex"]}
                _hover={{ bg: themeColor().color2, color: themeColor().bgColor }}
            />
        </Box>
        
    </Box>
  )
}
