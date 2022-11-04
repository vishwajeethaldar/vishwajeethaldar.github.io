import {Route, Routes} from "react-router-dom"
import { ConatctP, HomeP, ProjectP, SkillsP } from "../Pages"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path={"/"}  element={<HomeP/>}/> 
    </Routes>
  )
}


export default MainRoutes