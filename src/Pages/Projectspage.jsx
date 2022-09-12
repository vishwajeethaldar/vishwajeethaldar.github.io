import { Box, GridItem, SimpleGrid } from '@chakra-ui/react'
import { Footer } from '../Components/footer/Footer'
import { Header } from '../Components/header/Header'

export const Projectspage = () => {
  return (
    <Box>
    <Box position={"sticky"} top={0}>
         <Header />  
     </Box>
     
   <SimpleGrid >
     <GridItem>
      
     </GridItem>

     <GridItem  >
     

     </GridItem >

     <GridItem >
       <Box>
           <Footer/>
       </Box>
     </GridItem>
   </SimpleGrid>
 </Box>
  )
}
