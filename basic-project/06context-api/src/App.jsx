import { useState } from 'react'

import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

import Profile from './component/Profile'
import Login from './component/Frist'


function App() {
 

  return (
    <UserContextProvider>
      <h1>hell</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App