import { Box, Flex, Image } from "@chakra-ui/react"
import sociallinks from "./sociallinks"

export const ReferanceLinks = () => {
  return (
    <Flex gap="20px">
            {sociallinks.map((link)=>{
                return (
                    <Box key={link.id} pb="10px" border={"1px solid #ddd"} h="40px" _hover={{transform:"scale(1.1)", transition:".1s all linear"}}>
                        <a href={link.path} target="_blank" rel="noreferrer">
                            <Image w="100%" h={"38px"} src={link.image} />
                        </a>
                    </Box>
                )
            })}
    </Flex>
  )
}
