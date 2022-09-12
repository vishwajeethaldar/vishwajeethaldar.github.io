import { Box, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import active from './menuStyle.module'

export const MenuLink = ({linkpath, linkname, size, family, color, transform}) => {
  
  return (
    <Box>
        <NavLink  to={linkpath}  style={({ isActive }) =>
              isActive ? active.activeStyle : undefined
            }>
               <Text h="100%" px="10px" fontSize={size} align={["center", "center", "",""]} fontFamily={family} color={color} textTransform={transform}>
                {linkname}
               </Text>
        </NavLink>
    </Box>
  )
}
