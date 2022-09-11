import { Flex } from '@chakra-ui/react'
import React from 'react'

import {MenuLink} from './MenuLink'

const menus = [
  {
    id:1,
    path:"/",
    name:"Home"
  },
  {
    id:2,
    path:"/skills",
    name:"Skills"
  },
  {
    id:3,
    path:"/projects",
    name:"Projects"
  },
  {
    id:4,
    path:"/contact",
    name:"Contact"
  }

]
export const Navmenus = ({diection}) => {
  return (
    <Flex direction={diection} gap={"20px"}>
      {menus.map((menu)=>{
        return <MenuLink linkname={menu.name} linkpath={menu.path} key={menu.path} size={['1em','1em','1.2em','1.2em']}/>
      })}
    </Flex>
  )
}
