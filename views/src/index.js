import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRouteLogin from './components/functionality/ProtectedRouteLogin'
import ProtectedRoute from './components/functionality/ProtectedRoute'

const rootElement = document.getElementById('app')

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProtectedRouteLogin exact path='/' component={App} login='login' />} />
      <Route path='/login' element={<ProtectedRouteLogin exact path='/login' component={App} login='login' />} />
      <Route path='/register' element={<ProtectedRouteLogin exact path='/register' component={App} login='register' />} />
      <Route path='/home' element={<ProtectedRoute exact path='/home' component={App} screen='home' />} />
      <Route path='/inventary' element={<ProtectedRoute exact path='/inventary' component={App} screen='inventary' />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)