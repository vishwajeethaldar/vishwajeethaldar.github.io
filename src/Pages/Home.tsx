import { AboutSection, MobileNav, Navbar, StickyNav, Experience, Education } from "../Components"
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
      
     {/* Desktop Navbar - Sticky */}
     <Show breakpoint='(min-width: 768px)'>
       <Box ref={navRef}>
         <Navbar selected={selected} setSelected={setSelected}/>
       </Box>
     </Show>
      
     {/* Sticky Nav on Scroll - Desktop */}
     <Show breakpoint='(min-width: 768px)'>
       <Box 
         style={scrollH>204?insideview:outside} 
         display={scrollH>204?"block":"none"} 
         position="sticky" 
         top="0px" 
         zIndex="1000"
       >
         <StickyNav selected={selected} setSelected={setSelected}/>
       </Box>
     </Show>

     {/* Mobile Navbar */}
     <Show breakpoint='(max-width: 767px)'>
       <Box 
         position="sticky" 
         top="0px" 
         zIndex="1000" 
         bg={themeColor().navaBGColor}
         backdropFilter="blur(10px)"
         boxShadow={`0 2px 10px ${themeColor().shadowColor}`}
       >
         <MobileNav selected={selected} setSelected={setSelected}/>
       </Box>
     </Show>
      
       <Box>
       
          <AboutSection />
      </Box>

      <Box id={"skills"} py="50px"> 
          <Skills/>
      </Box>  

      <Box id={"experience"}> 
          <Experience/>
      </Box>

      <Box id={"education"}> 
          <Education/>
      </Box>
      
        <Box id={"projects"}> 
          <Projects/>
        </Box> 

        <Box ref={contactRef} style={contactRefView?insideview:outside} id={"contact"} py="100px"> 
          <Contact/>
        </Box> 

        <Box ref={footerRef} style={footerRefView?insideview:outside}>
          <Footer  selected={selected} setSelected={setSelected}/>
        </Box>
    </Box>
  )
}

export default Home
