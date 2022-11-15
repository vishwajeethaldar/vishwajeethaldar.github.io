import { DownloadIcon } from "@chakra-ui/icons"
import { Button,Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { saveAs } from "file-saver";

export const DonwloadLink = ({path, title}) => {

const saveFile=()=>{
  saveAs(`${process.env.PUBLIC_URL}/docs/Vishwajeet-Haldar-Resume.pdf`,"Vishwajeet-Haldar-Resume.pdf")
}
  return (
    
       <Button _hover={{bg:"none", transform:"scale(.98)", color:"#959"}} variant={"outline"}  colorScheme={"twitter"} onClick={saveFile}>
        {/* <Link to={path} target={"_blank"} download={true}> */}
            <Text>
                  <DownloadIcon/> {title}
            </Text>
          {/* </Link> */}
       </Button>
   
  )
}
