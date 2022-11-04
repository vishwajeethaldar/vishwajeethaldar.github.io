import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ThemeContextProvider from './context/Theme'
import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
     <ThemeContextProvider>
       <ChakraProvider>
        <App />
       </ChakraProvider>
      </ThemeContextProvider>
    </BrowserRouter>
)
