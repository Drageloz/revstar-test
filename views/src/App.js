import React from 'react'
import { GlobalStyle } from './GlobalStyles'
import { LoginLayout } from './components/LoginLayout'
import { Layout } from './components/Layout'
import { DataContext, DataProvider } from './context/DataContext'

function SelectLayout (props) {
  const login = props.login
  const screen = props.screen
  if (login) {
    return <LoginLayout login={login} />
  }
  return <Layout screen={screen} />
}

export const App = ({ screen, login }) => {
  return (
    <React.StrictMode>
      <DataProvider>
        <GlobalStyle />
        <SelectLayout screen={screen} login={login} />
      </DataProvider>
    </React.StrictMode>
  )
}
