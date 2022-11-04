import {useContext} from 'react'
import { ThemeContext } from '../context/Theme'
import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {Box} from '@chakra-ui/react'
import themeColor from './Colors'

const ToggleTheme = () => {
    const {mode, setMode} = useContext(ThemeContext)
  return (
    <Box borderRadius={"5px"} py={"5px"} px={"10px"} w={"50px"} textAlign={"center"} border={`1px solid ${themeColor().color2}`} _hover={{cursor:"pointer"}} onClick={()=>{
        setMode(mode==="light"?"dark":"light")
    }} >
        {mode==="light"?<FaMoon fontSize={"22px"} color={"#564"}/>:<FiSun color={"#fff"} fontSize={"26px"} />}
    </Box>
  )
}


export default ToggleTheme