import { Box, Image, Flex, Text, Button} from '@chakra-ui/react'
import React from 'react'
import themeColor from '../../utils/Colors'

export default function TechStackIte({title, img}:{title:string, img:string}) {
  return (
    <Flex _hover={{transform:"scale(.98)", cursor:"pointer", transition:"all .2s ease-in"}} borderRadius={"5px"}  py={"5px"}  gap={"5px"} >
      {/* <Image src={img} alt={title} w={"30px"}/> */}
      <Button variant={"outline"} colorScheme={"twitter"} px={"10px"} py={"0px"} borderRadius={"5px"}>
        <Text fontSize={["12px","12px","14px","14px"]} color={themeColor().color1}>{title}</Text>
      </Button>
    </Flex>
  )
}
