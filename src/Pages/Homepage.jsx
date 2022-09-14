import {  Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import { useContext } from 'react';
import { About } from '../Components/Aboutme/About';
import { Footer } from '../Components/footer/Footer';
import {Header} from '../Components/header/Header';

import { Banner } from '../Components/TopBanner/Banner';
import { AppContext } from '../Context/AppContext';

export const Homepage = () => {
  const {bgColor} = useContext(AppContext)

  return (
    <Box w="100%" bg={bgColor}>
      
        <Header position={"sticky"} zindex={9999} top={0} />  
        
      <SimpleGrid >
        <GridItem>
            <Banner/>
        </GridItem>

        <GridItem  >
          <About/>

        </GridItem >

        <GridItem>
          <Box>
              <Footer/>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
   
  )
}
