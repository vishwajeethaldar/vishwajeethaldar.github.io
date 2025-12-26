import { Box, Flex, Stack, Text} from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";
import { TfiEmail} from "react-icons/tfi"
import {FcCellPhone} from "react-icons/fc"
import themeColor from "../../utils/Colors";
import { SocialLink } from "../footer/SocialLink";
export default function Contact() {
  return (
    <Box w={["95%", "90%", "85%", "80%"]} mx="auto" maxW="1200px">
        <Box mb="60px" textAlign="center">
            <Text fontFamily={'PT Serif, serif'} color={themeColor().color1} fontSize={["2em", "2.5em", "3em", "3.5em"]} fontWeight="700" mb="10px">
                Contact Me
            </Text>
            <Box w="60px" h="4px" bg={themeColor().color2} mx="auto" borderRadius="2px"></Box>
        </Box>

        <Flex w="100%" justify="center" direction={["column","column","row","row"]} gap="50px" align="flex-start">
            <Box w={["100%","100%","35%","35%"]}>
                <Stack color={themeColor().color1} spacing="25px"> 
                    <Flex direction="column">
                        <Text fontSize={["1.8em", "2em", "2.2em", "2.5em"]} fontWeight="700" mb="5px">
                            Have an idea?
                        </Text>
                        <Text fontSize={["1.8em", "2em", "2.2em", "2.5em"]} fontWeight="700" color={themeColor().color2}>
                            Let's make something great!
                        </Text>
                    </Flex>
                    
                    <Box pt="20px">
                        <Text fontSize={["1.3em", "1.5em", "1.6em", "1.8em"]} fontWeight="600" mb="20px">
                            Contact Details
                        </Text>

                        <Stack spacing="15px">
                            <Flex justify="flex-start" align="center" gap="12px">
                                <TfiEmail size="20px" /> 
                                <Text fontSize={["0.95em", "1em", "1.05em", "1.1em"]}>onlyjeet3@gmail.com</Text>
                            </Flex>

                            <Flex justify="flex-start" align="center" gap="12px" flexWrap="wrap">
                                <FcCellPhone size="20px" />
                                <Text fontSize={["0.95em", "1em", "1.05em", "1.1em"]}>+91 7489208485, +91 9669438381</Text>
                            </Flex>

                            <Flex justify="flex-start" align="center" gap="12px">
                                <Text fontSize="20px">📍</Text>
                                <Text fontSize={["0.95em", "1em", "1.05em", "1.1em"]}>Kanker, Chhattisgarh, India</Text>
                            </Flex>
                        </Stack>
                    </Box>
                    
                    <Box pt="10px">
                        <SocialLink />
                    </Box>
                </Stack>
            </Box>

            <Box w={["100%","100%","60%","60%"]}>
                <ContactForm />
            </Box>
        </Flex>
    </Box>
  )
}
