
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { DonwloadLink } from "./DonwloadLink"
import pdf from '../../docs/Vishwajeet-Haldar-Resume.pdf'
import { Type } from "./Type"


let root = process.env.PUBLIC_URL
export const Banner = () => {


const textColor = useColorModeValue("#9BFDFF", "#19fbff")
  return (
    <Box  w="100%" backgroundImage={`${root}/logo/banner.jpg`} backgroundSize={"cover"}>
    <Flex bg={`rgba(1, 16, 41,.9)`} py="30px"  w="100%" justify={"center"} align="center" gap={["10px", "10px","100px","150px"]}   >
          
            <Box pl="20px"  p="30px" borderRadius={"20px"}>
                    <Flex direction={"column"} gap={"10px"}>
                    
                    <Text color={textColor} fontSize={["1.4em","1.4em", "2.4em"]} fontWeight={"800"} fontFamily={"'Anek Latin', sans-serif"}>
                        Hi, I am <br/>
                        Vishwajeet Haldar
                    </Text>

                    <Text color={textColor}>
                       <Type />
                    </Text>
                    
                   <Box py="15px">
                      <DonwloadLink path={pdf} title={"Resume"}/>
                   </Box>
                </Flex>

            </Box>

            <Box w={["180px", "180px", "420px"]} borderRadius={"50%"} pr={["20px","20px","",""]} backdropFilter={"blur"} >
                <Image w="100%" borderRadius={"50%"} border="2px solid #999"  src={`${root}/images/profile.png`}  bg={"rgba(1, 16, 41,.5)"}/>
            </Box>
           

    </Flex>
    </Box>
  )
}
