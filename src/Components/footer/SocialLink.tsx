import { Box, Flex, Image } from "@chakra-ui/react"

const links = [
{
    id:1,
    path:"https://github.com/vishwajeethaldar",
    image:`logo/icons/GitHub-Mark.png`
},
{
    id:2,
    path:"https://www.linkedin.com/in/vishwajeethaldar/",
    image:`logo/icons/LinkedIn.png`
}
]



export const SocialLink = () => {
  return (
    <Flex gap="20px">
            {links.map((link)=>{
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
