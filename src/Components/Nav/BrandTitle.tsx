import {Box, Image, Text} from '@chakra-ui/react';
import themeColor from '../../utils/Colors';

export const BrandTitle = ({fontS}:{fontS:Array<string>}) => {
  return (
    <Box>
      <Text 
        fontFamily={'PT Serif, serif'} 
        color={themeColor().color2} 
        fontWeight="700" 
        fontSize={fontS}
        _hover={{ 
          color: themeColor().color2,
          transform: "scale(1.05)",
        }}
        transition="all 0.2s"
        cursor="pointer"
        as="a"
        href="#home"
      >
        Vishwajeet Haldar
      </Text>
    </Box>
  )
}
