import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const LinkItem = ({title, link}) => {
  console.log(title, link)
  return (
      <Link to={link}>
          <Text  w="100%" px="20px"> {title} </Text>
      </Link>
  )
}
