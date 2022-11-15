import React, {createContext, useState} from 'react'

export const ThemeContext =  createContext<any>(null)

const ThemeContextProvider = ({children}:{children:React.ReactNode}) => {
 const [mode, setMode] = useState<"light"|"dark">("light")
  return (
    <ThemeContext.Provider value={{mode, setMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider