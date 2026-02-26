import './App.css'
import AppContainer from '##/src/components/appcontainer/AppContainer.tsx'
import { BrowserRouter } from "react-router";

function App() {


  return (
    <>
    <BrowserRouter>
      <AppContainer />    
    </BrowserRouter>  
    </>
  )
}

export default App
