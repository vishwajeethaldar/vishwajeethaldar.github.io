import {Box, Image, Text} from '@chakra-ui/react';
import themeColor from '../../utils/Colors';

export const BrandTitle = ({fontS}:{fontS:Array<string>}) => {
  return (
   
      <Box  textTransform="uppercase" >
          {/* <Image src={themeColor().brandTitle}/>
            */}
           <Text fontFamily={'PT Serif, serif'} color={themeColor().color2} fontWeight={"700"} fontSize={fontS}>Vishwajeet Haldar</Text>
      </Box>
  
  )
}
