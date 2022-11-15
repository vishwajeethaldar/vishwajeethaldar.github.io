import { Alert, AlertIcon, Box, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';

export const ContactForm = () => {
    const [mailstatus, setMailStatus] = useState(false)
    const  sendEmail = (event)=> {
        event.preventDefault() 
        emailjs.sendForm('service_xpcohni', 'template_6tfh4yo', event.target, 'IHENfmxd-_6x6TKpg')
            .then((result) => {
                setMailStatus(true)
                setTimeout(() => {
                    setMailStatus(false)
                    event.target.reset();
                }, 5000);

            }, (error) => {
                console.log(error.text);
        });
    }
    
  return (
    <Box w={"100%"} px={"25px"} py="20px">
        <form onSubmit={(e)=>sendEmail(e)}>
            <Flex justify={"flex-start"} align={"center"} mt={"10px"}>
                <Text w={"25%"}> Name : </Text>
                <Input type={"text"} placeholder="Name" required={true} name="from_name"/>
            </Flex>

            <Flex justify={"flex-start"} align={"center"} mt={"10px"}>
                <Text w={"25%"}> Email : </Text>
                <Input type={"email"} placeholder="email"  required={true} name="from_email"/>
            </Flex>

            <Flex justify={"flex-start"} align={"center"} mt={"10px"}>
                <Text w={"25%"}> Subject : </Text>
                <Input type={"text"} placeholder="subject"  required={true} name="from_subject"/>
            </Flex>

            <Flex justify={"flex-start"} align={"center"} mt={"10px"}>
                <Text w={"25%"}> Message : </Text>
                <Textarea placeholder='Message' required={true} name="message"/>
            </Flex>

            <Flex justify={"flex-start"} align={"center"} mt={"10px"}>
            <Text w={"20%"}>  </Text>
                <Input w="150px" type={"submit" } value="Send" _hover={{cursor:"pointer", color:"#925", fontWeight:"700", border:"2px solid #999"}} />
            </Flex>
           
        </form>

        {
        mailstatus?
        <Alert status='success' mt="20px">
            <AlertIcon />
            Email Send Successfully
        </Alert>
        :""
        }
   
    </Box>
  )
}
