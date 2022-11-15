import { Box, Flex, Image } from '@chakra-ui/react'
import React, {useContext} from 'react'
import {ThemeContext} from '../../context/Theme'
import themeColor from '../../utils/Colors'
export default function Stats() {
    const  {mode} = useContext(ThemeContext)
    const bg = mode==="light"?"#000":"#000"
  return (
    <Box w={"100%"} >
        <Flex justify={"center"} mx={"auto"} w={"100%"} mb={"10px"}>
            <Image w={["80%","80%","50%","50%"]} minH={"150px"} src={`https://github-readme-streak-stats.herokuapp.com?user=vishwajeethaldar&theme=${mode}`} />
        </Flex>
    
	      <Flex align={"center"} justify={"center"} mx={"auto"} gap={"20px"}>
            <Image  w={"45%"} src={`https://github-readme-stats.vercel.app/api?username=vishwajeethaldar&show_icons=true&locale=en&repo=convoychat&theme=${mode}`} alt="Vishwajeet Haldar Git State"  />
            <Image  w={"45%"}  src={`https://github-readme-stats.vercel.app/api/top-langs?username=vishwajeethaldar&show_icons=true&locale=en&layout=compact&theme=${mode}`} alt="Vishwajeet Haldar Git State"  />	
        </Flex>
    </Box>
  )
}

