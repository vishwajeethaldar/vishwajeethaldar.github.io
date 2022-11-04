import {  Box, Flex, GridItem, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useContext } from 'react';
import { About } from '../Components/Aboutme/About';
import { Footer } from '../Components/footer/Footer';
import {Header} from '../Components/header/Header';
import { Banner } from '../Components/TopBanner/Banner';
import { AppContext } from '../Context/AppContext';
import { ContactForm } from '../Components/Contact/ContactForm';
import { ReferanceLinks } from '../Components/footer/ReferanceLinks';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

export const Homepage = () => {
 
  const {bgColor} = useContext(AppContext)

  return (
    <Box w="100%" bg={bgColor} _hover={{cursor:"cell"}}>
      
        <Header position={"sticky"} zindex={9999} top={0} />  
        <Banner/>
        <About/>
      <SimpleGrid columns={[1,1,2,2]} my="30px">
        

        <GridItem px={["35px","35px","15px","160px"]} >
        <Stack> 
        <Flex direction={"column"} >
              <Text fontSize={"2xl"} fontWeight={"700"}>
                  Have an idea?
              </Text>
              <Text fontSize={"2xl"} fontWeight={"700"}>
                  Let's make something great!
              </Text>
            </Flex >
                  <Text fontSize={"3xl"}>
                      Contact Me
                  </Text>

                  <Text>
                    <EmailIcon /> : onlyjeet3@gmail.com
                  </Text>

                  <Text>
                    <PhoneIcon />: +91-7489208485
                  </Text>
              </Stack>
          
          <Box my="30px">
              <ReferanceLinks/>
          </Box>

        </GridItem >

        <GridItem px={["15px","15px","35px","35px"]}>
            <ContactForm/> 
        </GridItem>

      </SimpleGrid>
          <Box>
              <Footer/>
          </Box>

      
    </Box>
   
  )
}
