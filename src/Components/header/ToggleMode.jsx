import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode } from "@chakra-ui/react"


export const ToggleMode = () => {

    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <Button onClick={toggleColorMode} variant={"outline"} w={8} h={8} outline="0">
         {colorMode === 'light' ? <MoonIcon  /> : <SunIcon/>}
      </Button>
    </header>
  )

  
}
