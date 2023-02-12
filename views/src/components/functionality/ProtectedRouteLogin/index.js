import React from 'react'
import { Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function ProtectedRouteLogin ({ component: Component, ...restOfProps }) {
  const [cookies] = useCookies([])

  return cookies.jwt ? <Navigate to='/home' /> : <Component {...restOfProps} />
}

export default ProtectedRouteLogin
