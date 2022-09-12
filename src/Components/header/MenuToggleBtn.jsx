import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Flex } from '@chakra-ui/react'
import { ToggleMode } from './ToggleMode'


export const MenuToggleBtn = ({state, updateState}) => {

  return (
    <Flex py="15px" gap="10px">
        <Box>
             <ToggleMode h="20px"/>
        </Box>
        <Button w={8} h={8} onClick={()=>updateState(state?false:true)}>
            {state?<CloseIcon/>:<HamburgerIcon />}  
        </Button>
    </Flex>
  )
}
