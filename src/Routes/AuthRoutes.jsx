import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'


/**
 * Si el usuario ha iniciado sesión, redirigir a la página de inicio
 * @returns Los elementos secundarios del componente AuthRoutes.
 */
export function AuthRoutes({children}) {
    const {userLogin} = useContext(AuthContext)

    // if (userLogin) {
    //     return <Navigate to="/" />
    // }

  return <>{userLogin?(children):<Navigate to="/"/>}</>
}

export function AuthRoutesLogin({children}) {
  const {userLogin} = useContext(AuthContext)

  if (userLogin) {
      return <Navigate to="/" />
  }

return <>{children}</>
}


