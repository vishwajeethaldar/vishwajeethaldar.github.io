
import { MobileNav, Navbar, StickyNav } from "../Components"
import {Box} from '@chakra-ui/react';
import themeColor from "../utils/Colors";
const Projects = () => {
  return (
    <Box bg={themeColor().bgColor} minH={"100vh"}>
      <Box position={"sticky"} top={"0px"} transition={"all 1s ease"}>
          <StickyNav />
      </Box>

      <Box position={"sticky"} top={"0px"}>
        <MobileNav/>
      </Box>
      </Box>
  )
}

export default Projects