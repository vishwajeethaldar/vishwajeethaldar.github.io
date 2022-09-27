import { Box } from "@chakra-ui/react"
import { useContext } from "react"
import { Footer } from "../Components/footer/Footer"
import { Header } from "../Components/header/Header"
import { Skills } from "../Components/Skills/Skills"
import { AppContext } from "../Context/AppContext"


export const Skillspage = () => {
  const {bgColor} = useContext(AppContext)
  return (
    <Box bg={bgColor} _hover={{cursor:"cell"}}>
        <Header position={"sticky"} zindex={9999} top={0} />  

        <Box>
          <Skills/>
          
        </Box>
        <Box>
            <Footer/>
        </Box>
    </Box>
  )
}
