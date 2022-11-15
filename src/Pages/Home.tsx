import { AboutSection, MobileNav, Navbar, StickyNav } from "../Components"
import themeColor from '../utils/Colors'
import {Box,Show} from '@chakra-ui/react';
import { useEffect, useState, useContext, useRef} from "react";
import Skills from "../Components/skills/Skills";

import {ThemeContext} from "../context/Theme";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";
import { Footer } from "../Components/footer/Footer";
import {useInView} from 'framer-motion'
import { insideview, outside } from "../Components/style/style";

const Home = () => {
const [scrollH, setScrollH] = useState(0)
const [selected, setSelected] =  useState("home")

const navRef = useRef(null)
const footerRef = useRef(null)
const contactRef = useRef(null)

const navRefView = useInView(navRef) 
const footerRefView = useInView(footerRef) 
const contactRefView = useInView(contactRef) 

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
    <Box  bg={themeColor().bgColor} minH={"100vh"} id={"home"}>
      
     
     <Box ref={navRef} style={navRefView?insideview:outside}>
        <Navbar selected={selected} setSelected={setSelected}/>
     </Box>
      
     <Box style={scrollH>204?insideview:outside} display={scrollH>204?"block":"none"} backdropFilter={"blur"} position={"sticky"} top={"0px"} zIndex={"10"} transition={"background-color .5s ease"}>
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

      <Box id={"skills"} minH={"400px"} > 
          <Skills/>
      </Box>  

      
        <Box id={"projects"} minH={"400px"} w={"100%"} > 
          <Projects/>
        </Box> 

        <Box ref={contactRef} style={contactRefView?insideview:outside} id={"contact"} minH={"350px"}  > 
          <Contact/>
        </Box> 

        <Box ref={footerRef} style={footerRefView?insideview:outside}>
          <Footer  selected={selected} setSelected={setSelected}/>
        </Box>
    </Box>
  )
}

export default Home
