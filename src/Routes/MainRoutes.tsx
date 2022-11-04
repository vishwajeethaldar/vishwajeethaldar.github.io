import {Route, Routes} from "react-router-dom"
import HomeP from "../Pages/Home"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path={"/"}  element={<HomeP/>}/> 
    </Routes>
  )
}


export default MainRoutes