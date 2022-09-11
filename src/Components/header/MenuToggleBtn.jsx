import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'


export const MenuToggleBtn = ({state, updateState}) => {

  return (
    <Box>
        <Button onClick={()=>updateState(state?false:true)}>
            {state?<CloseIcon/>:<HamburgerIcon />}  
        </Button>
    </Box>
  )
}
