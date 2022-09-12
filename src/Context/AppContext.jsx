import { useColorModeValue } from "@chakra-ui/react";
import { createContext } from "react";

export const  AppContext = createContext();

export const AppContextProvider = ({children})=>{
const bg = useColorModeValue("rgba(255,255,255,0.7)","rgba(26,32,44,0.6)")
// const linkcolor = useColorModeValue("rgba(255,255,255,0.7)","rgba(65, 100, 215,0.6)")
const border = useColorModeValue("#eee", "#555")
return(
    <AppContext.Provider value={{bg, border}}>
        {children}
    </AppContext.Provider>
)
}

