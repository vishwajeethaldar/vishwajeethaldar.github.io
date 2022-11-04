import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../../Context/AppContext"


export const ToggleMode = () => {
  const {color} = useContext(AppContext)
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <Button onClick={toggleColorMode} variant={"outline"} w={8} h={8} outline="0">
         {colorMode === 'light' ? <MoonIcon  color={color}/> : <SunIcon/>}
      </Button>
    </header>
  )

  
}
