import { Box, Text } from "@chakra-ui/react"

import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AppContext } from "../../Context/AppContext"
import active from './menuStyle.module'

export const MenuLink = ({linkpath, linkname, size, family, transform}) => {
  const {color} = useContext(AppContext)
  return (
    <Box minWidth={"100px"}>
        <NavLink  to={linkpath} style={({isActive})=>isActive?active.activeStyle:undefined}>
               <Text _hover={{color:"#582", fontWeight:"700", transition:"all linear .1s"}}  mx="auto" w ={["50%","50%","100%","100%"]}  lineHeight={["40px","40px","60px","60px"]} px="10px" fontSize={size} align={["center", "center", "",""]} fontFamily={family}  textTransform={transform}>
                {linkname}
               </Text>
        </NavLink>
    </Box>
  )
}
