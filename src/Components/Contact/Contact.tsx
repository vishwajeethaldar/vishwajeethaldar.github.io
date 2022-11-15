import { Box, Flex, Stack, Text} from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";
import { TfiEmail} from "react-icons/tfi"
import {FcCellPhone} from "react-icons/fc"
import themeColor from "../../utils/Colors";
import { SocialLink } from "../footer/SocialLink";
export default function Contact() {
  return (

    <Box>

        <Box mx={"auto"} mb={"10px"} w={["96%", "96%", "80%", "80%"]} px={["15xp", "15px", "20px", "10px"]}>
            <Text fontFamily={'PT Serif, serif'} py={"5px"} textAlign={"center"}color={themeColor().color1}  fontSize={["1.8em","1.8em","1.8em"]} fontWeight={"700"}>
                    {"Contact Me"}
            </Text>
        </Box>

    <Flex w={"100%"} justify={"center"} direction={["column","column","row","row"]}>

        
        <Box w={["90%","90%","20%","20%"]} px={["20px","20px","0px","0px"]}>
          
            <Stack color={themeColor().color1}> 
                <Flex direction={"column"} pt={"25px"}>
                <Text   fontSize={"2xl"} fontWeight={"700"}>
                    Have an idea?
                </Text>
                <Text   fontSize={"2xl"} fontWeight={"700"}>
                    Let's make something great!
                </Text>
                </Flex>
                <Text   fontSize={"3xl"}>
                    Contact Details
                </Text>

                <Flex   justify={"flex-start"} align={"center"}>
                <TfiEmail /> {"   : " +" onlyjeet3@gmail.com"}
                </Flex>

                <Flex   justify={"flex-start"} align={"center"}>
                <FcCellPhone />: +91-7489208485, <br/> +91-9669438381
                </Flex>
                
                <Box py={"10px"}>
                    <SocialLink />
                </Box>
            </Stack>
        </Box>

        <Box w={["100%","100%","50%","50%"]}>
            <ContactForm />
        </Box>
    </Flex>
    </Box>
  )
}
