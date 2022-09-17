import {  Box, Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import { useContext } from 'react';
import { About } from '../Components/Aboutme/About';
import { Footer } from '../Components/footer/Footer';
import {Header} from '../Components/header/Header';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Banner } from '../Components/TopBanner/Banner';
import { AppContext } from '../Context/AppContext';
import { ContactForm } from '../Components/Contact/ContactForm';


export const Homepage = () => {
 
  const {bgColor} = useContext(AppContext)

  return (
    <Box w="100%" bg={bgColor}>
      
        <Header position={"sticky"} zindex={9999} top={0} />  
        <Banner/>
        <About/>
      <SimpleGrid columns={[1,1,2,2]}>
        <GridItem>
            <Flex direction={"column"} pl="25px">
              <Text fontSize={"2xl"} fontWeight={"700"}>
                  Have an idea?
              </Text>
              <Text fontSize={"2xl"} fontWeight={"700"}>
                  Let's make something great!
              </Text>
            </Flex>
            <ContactForm/> 
        </GridItem>

        <GridItem  >
         

        </GridItem >

      </SimpleGrid>
          <Box>
              <Footer/>
          </Box>
    </Box>
   
  )
}
