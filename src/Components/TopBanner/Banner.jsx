
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { DonwloadLink } from "./DonwloadLink"


let root = process.env.PUBLIC_URL
export const Banner = () => {
  return (
    <Flex w="100%" justify={"center"} align="center" gap={["10px", "10px","50px","50px"]} py="30px">
            <Box pl="20px">
                    <Flex direction={"column"} gap={"10px"}>
                    
                    <Text fontSize={["1.4em","1.4em", "2.4em"]} fontWeight={"800"} fontFamily={"'Anek Latin', sans-serif"}>
                        Hi, I am <br/>
                        Vishwajeet Haldar
                    </Text>

                    <Text color={"blue.700"}>
                        Learner | Full Stack Web Developer
                    </Text>
                    
                   <Box py="15px">
                      <DonwloadLink path={`${root}/docs/vishwajeet-haldar-resume.pdf`} title={"Resume"}/>
                   </Box>
                </Flex>

            </Box>

            <Box pr="20px">
                <Image w={["180px", "180px", "420px"]} src={`${root}/images/profile.jpg`}/>
            </Box>
    </Flex>
  )
}
