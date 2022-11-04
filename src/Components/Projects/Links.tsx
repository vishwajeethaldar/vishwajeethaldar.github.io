import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Links({title, link}:{title:string, link:string}) {
  return (
    <Flex>
       <Button colorScheme={"messenger"}>
        <a href={link} target={"_blank"}> {title}</a>
       </Button>
    </Flex>
  )
}
