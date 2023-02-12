import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { api } from '../axios/auth_api'

export const DataContext = React.createContext()

export const DataProvider = ({ children }) => {
  const navigate = useNavigate()
  const [cookies, setCookies, removeCookies] = useCookies([''])
  const [data, setData] = useState(
    {
      name: '',
      email: '',
      role: '',
    }
  )

  useEffect(async () => {
    await api.calls.decode(cookies.jwt).then(res => {
      setData(res.data.user)
      console.log(res.data.user)
    }).catch(err => {
      removeCookies('jwt')
      navigate('/')
    })
  }, [])

  return (
    <DataContext.Provider value={{
      data,
      setData
    }}
    >
      {children}
    </DataContext.Provider>
  )
}
