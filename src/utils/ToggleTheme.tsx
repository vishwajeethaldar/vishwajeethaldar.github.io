import {useContext} from 'react'
import { ThemeContext } from '../context/Theme'
import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {Box} from '@chakra-ui/react'
import themeColor from './Colors'

const ToggleTheme = () => {
    const {mode, setMode} = useContext(ThemeContext)
  return (
    <Box borderRadius={"5px"} py={"5px"} color={themeColor().color2} px={"10px"} w={"50px"} textAlign={"center"}  _hover={{cursor:"pointer", transform:"scale(.9)"}} onClick={()=>{
        setMode(mode==="light"?"dark":"light")
    }} >
        {mode==="light"?<FaMoon fontSize={"22px"} />:<FiSun fontSize={"26px"} />}
    </Box>
  )
}


export default ToggleTheme