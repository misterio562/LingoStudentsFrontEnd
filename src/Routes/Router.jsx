import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { AuthRoutes } from './AuthRoutes'


/**
 * La función de enrutador devuelve un componente de rutas que contiene un componente de ruta para cada
 * página de la aplicación.
 */
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='/login' element={<AuthRoutes>
          <Login/>
        </AuthRoutes>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default Router