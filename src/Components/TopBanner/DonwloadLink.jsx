import { DownloadIcon } from "@chakra-ui/icons"
import { Button,Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
export const DonwloadLink = ({path, title}) => {
  return (
    <Link to={path} target={"_blank"} download={true} position={"relative"} z-index={-1}>
       <Button variant={"outline"} colorScheme={"twitter"} >
            <Text >
                  <DownloadIcon/> {title}
            </Text>
       </Button>
    </Link>
  )
}
