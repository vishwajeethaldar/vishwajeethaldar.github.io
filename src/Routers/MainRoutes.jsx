import {Routes, Route} from 'react-router-dom'
import { Homepage } from '../Pages/Homepage'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/skills' element={<Homepage/>}/>
        <Route path='/projects' element={<Homepage/>}/>
        <Route path='/contact' element={<Homepage/>}/>
    </Routes>
  )
}
