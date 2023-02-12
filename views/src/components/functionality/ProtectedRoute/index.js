import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function ProtectedRoute ({ component: Component, ...restOfProps }) {
  const location = useLocation()
  const [cookies] = useCookies([])

  return cookies.jwt ? <Component {...restOfProps} /> : <Navigate to='/' />
}

export default ProtectedRoute
