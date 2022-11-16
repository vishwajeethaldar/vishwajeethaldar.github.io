import React, { useContext } from 'react'
import {Box, Button, Flex, Text} from "@chakra-ui/react"
import {ThemeContext} from "../../context/Theme"
import {BsFillEyeFill} from "react-icons/bs"
import {FiDownload} from 'react-icons/fi'
export default function Download() {
    const {mode} = useContext(ThemeContext)
    // https://github.com/vishwajeethaldar/RESUME/blob/main/Vishwajeet-Haldar-Resume.pdf
    // https://doc-04-1o-apps-viewer.googleusercontent.com/viewer/secure/pdf/e83mrpb00dej1cou57rrlr122sujkqdi/os710s0v2la9vufc8o8f82d1d31fijv6/1668509625000/drive/15431867614003134193/ACFrOgD5AVApPQQokPawJZOHCmPNdrlsMf97zJWdxYKkXgefDp2JWMHMKRa41jgT6PCmdb-29aRNE-KaqHMk417oY7YK9Qq75kgXTfOIvErUaFI2-o5MgY_5R_QpIe2XWH-IKM7odfeFXJtS6HYC?print=true&nonce=u5gltffh3kao0&user=15431867614003134193&hash=boknrgq03f1cc58au1ok8ho01i3aa6o5
  return (
    <a href="https://drive.google.com/file/d/1j012a0wHDUggem8YgNUYKyiZm211z2mG/view" target={"_blank"}>
    <Flex gap={"5px"}>
    <Button fontFamily={'PT Serif,serif'} _hover={{bg:mode==="dark"?"none":"", transform:"scale(.98)", color:"dark"?"#959":"#fcf"}} variant={mode==="dark"?"outline":"outline"}  colorScheme={"messenger"} >
        {/* <Link to={path} target={"_blank"} download={true}> */}
            <Flex gap={"5px"} align={"center"}>
            <Text>{"Resume  "+" "}</Text>
            <BsFillEyeFill />
            </Flex>
          {/* </Link> */}
    </Button>
      <a href="https://github.com/vishwajeethaldar/RESUME/raw/main/Vishwajeet-Haldar-Resume.pdf">
      <Button px={"0"} colorScheme={"messenger"}>
        <FiDownload />
      </Button>
      </a>
    </Flex>
    
    </a>
  )
}
