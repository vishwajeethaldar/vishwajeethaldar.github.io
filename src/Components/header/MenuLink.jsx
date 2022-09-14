import { Box, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AppContext } from "../../Context/AppContext"
import active from './menuStyle.module'

export const MenuLink = ({linkpath, linkname, size, family, transform}) => {
  const {color} = useContext(AppContext)
  const [activelink, setActive] = useState(false);
  return (
    <Box minWidth={"100px"}>
        <NavLink  to={linkpath}  style={({ isActive }) =>
              isActive ? setActive(true) : setActive(false)
            }>
               <Text style={activelink?active.activeStyle:{color:color}} mx="auto" w ={["50%","50%","100%","100%"]} borderBottom={activelink?["none","none","1px solid red","1px solid  #3792fa"]:"none"}  lineHeight={["40px","40px","60px","60px"]} px="10px" fontSize={size} align={["center", "center", "",""]} fontFamily={family}  textTransform={transform}>
                {linkname}
               </Text>
        </NavLink>
    </Box>
  )
}
