import {  Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import { About } from '../Components/Aboutme/About';
import { Footer } from '../Components/footer/Footer';
import {Header} from '../Components/header/Header';

import { Banner } from '../Components/TopBanner/Banner';

export const Homepage = () => {
  return (
    <Box w="100%">
          <Box position={"sticky"} top={0} zIndex={1}>
            <Header />  
          </Box>
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
