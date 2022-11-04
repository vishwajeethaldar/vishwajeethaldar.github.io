
import {Routes, Route} from 'react-router-dom'
import { Contactpage } from '../Pages/Contactpage'
import { Homepage } from '../Pages/Homepage'
import { Projectspage } from '../Pages/Projectspage'
import { Skillspage } from '../Pages/Skillspage'

export const MainRoutes = () => {
  return (
    <Routes>
        
          <Route path='/' element={<Homepage/>}/>
          <Route path='/skills' element={<Skillspage/>}/>
          <Route path='/projects' element={<Projectspage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
     
    </Routes>
  )
}
