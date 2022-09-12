import { Box, Flex, Image } from "@chakra-ui/react"
import sociallinks from "./sociallinks"

export const ReferanceLinks = () => {
  return (
    <Flex gap="20px">
            {sociallinks.map((link)=>{
                return (
                    <Box key={link.id} pb="10px">
                        <a href={link.path} target="_blank" rel="noreferrer">
                            <Image w="40px" src={link.image}/>
                        </a>
                    </Box>
                )
            })}
    </Flex>
  )
}
