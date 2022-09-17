import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Flex, GridItem, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { ContactForm } from '../Components/Contact/ContactForm'
import { Footer } from '../Components/footer/Footer'
import { ReferanceLinks } from '../Components/footer/ReferanceLinks'
import { Header } from '../Components/header/Header'
import { AppContext } from '../Context/AppContext'

export const Contactpage = () => {
  const {bgColor} = useContext(AppContext)

  return (
    <Box bg={bgColor}>
       <Box position={"sticky"} top={0}>
            <Header />  
        </Box>
      <Box my="20px">
          <Text fontSize={"25px"} fontWeight={"700"} textAlign={"center"}>
            
          </Text>
      </Box>
      <SimpleGrid columns={[1,1,2,2]} px={["20px",'20px',"100px", "100px"]}  >
        <GridItem px={"30px"}>
              <Stack> 
                  <Text fontSize={"4xl"}>
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

        </GridItem>

        <GridItem boxShadow={"0px 0px 8px #ccc"} borderRadius={"5px"} py="20px">
            <Flex direction={"column"} pl="25px">
              <Text fontSize={"2xl"} fontWeight={"700"}>
                  Have an idea?
              </Text>
              <Text fontSize={"2xl"} fontWeight={"700"}>
                  Let's make something great!
              </Text>
            </Flex>
            <ContactForm/>
        </GridItem > 

      </SimpleGrid>

        <Box>
            <Footer/>
        </Box>
    </Box>
  )
}
