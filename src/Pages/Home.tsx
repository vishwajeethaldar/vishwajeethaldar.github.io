import { AboutSection, MobileNav, Navbar, StickyNav } from "../Components"
import themeColor from '../utils/Colors'
import {Box,Show} from '@chakra-ui/react';
import { useEffect, useState, useContext} from "react";
import Skills from "../Components/skills/Skills";

import {ThemeContext} from "../context/Theme";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import { Footer } from "../Components/footer/Footer";


const Home = () => {
const [scrollH, setScrollH] = useState(0)
const [selected, setSelected] =  useState("home")

function logit() {
  setScrollH(window.pageYOffset);
}

useEffect(()=>{
  function watchScroll() {
    window.addEventListener("scroll", logit);
  }
  watchScroll();

  return () => {
    window.removeEventListener("scroll",logit);
  };

},[])



  return (
    <Box bg={themeColor().bgColor} minH={"100vh"} id={"top"}>
     <Box>
        <Navbar selected={selected} setSelected={setSelected}/>
     </Box>
      
     <Box display={scrollH>204?"block":"none"} backdropFilter={"blur"} position={"sticky"} top={"0px"} zIndex={"10"} transition={"background-color .5s ease"}>
          <StickyNav selected={selected} setSelected={setSelected}/>
      </Box>

       <Show breakpoint='(max-width: 767px)'  >
        <Box position={"sticky"} top={"0px"} backdropFilter={"blur"} zIndex={"10"} bg={themeColor().navaBGColor}>
          <MobileNav selected={selected} setSelected={setSelected}/>
        </Box>
      </Show>
      
       <Box>
          <AboutSection />
      </Box>

      <Box id={"skills"} minH={"450px"} > 
          <Skills/>
      </Box>  

      
        <Box id={"projects"} minH={"500px"} w={"100%"} > 
          <Projects/>
        </Box> 

        <Box id={"contact"} minH={"350px"}  > 
          <Contact/>
        </Box> 

        <Box>
          <Footer/>
        </Box>
    </Box>
  )
}

export default Home
