import { useState } from 'react'
import Todolist from './Todolist'
import './App.css'

function App() {

  return (
    <>
      <div className='w-full h-screen bg-black b bg-hero-pattern'>
        <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-6'>
          <h1 className='text-3xl font-bold text-black'>Welcome to my To Do List
          </h1>
          <Todolist />
        </div>
      </div>
    </>
  )
}

export default App
