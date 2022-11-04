import { useColorModeValue } from "@chakra-ui/react";
import { createContext } from "react";

export const  AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const borderColor = useColorModeValue("#ccc", "#555")
    const color = useColorModeValue("#00021f", "#EEE")
    const bgColor = useColorModeValue("rgba(255, 255, 255,.4)", "rgba(8,21,51,.8)")
return(
    <AppContext.Provider value={{bgColor, borderColor, color}}>
        {children}
    </AppContext.Provider>
)
}

