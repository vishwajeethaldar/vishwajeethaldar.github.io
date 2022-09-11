import {  Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import { Footer } from '../Components/footer/Footer';
import {Header} from '../Components/header/Header';

export const Homepage = () => {
  return (
   <SimpleGrid >
        <GridItem >
          <Header />    
        </GridItem>

        <GridItem>
          <Box>
            
          </Box>
        </GridItem >

        <GridItem >
          <Box>
              <Footer/>
          </Box>
        </GridItem>
   </SimpleGrid>
  )
}
