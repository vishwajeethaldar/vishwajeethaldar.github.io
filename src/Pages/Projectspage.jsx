import { Box , Text} from '@chakra-ui/react'
import { useContext } from 'react'
import { Footer } from '../Components/footer/Footer'
import { Header } from '../Components/header/Header'
import { Projects } from '../Components/projects/Projects'
import { AppContext } from '../Context/AppContext'


 
export const Projectspage = () => {
  const {bgColor} = useContext(AppContext)
  return (
    <Box bg={bgColor} _hover={{cursor:"cell"}}>
     
    <Box position={"sticky"} top={0} zIndex={9999}>
         <Header />  
     </Box>
     <Box>
        <Text fontSize={"4xl"} fontWeight={"700"} textAlign="center" py="10px">
          My Projects
        </Text>
      </Box>
      <Box>
        <Projects />
      </Box>

       <Box>
           <Footer/>
       </Box>
 </Box>
  )
}
