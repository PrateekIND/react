import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addval= ()=>{
    if (count<20) {
      setCount(count+1);
    }
    
  }
  const removeval= ()=>{
    if (count>0) {
      setCount(count-1);
    }

    
  }


  return (
    <>
      <h1>React By Prateek</h1>
      <h2>counter value : {count}</h2>
      <button id='add' onClick={addval}>add value</button>
      <br />
      <br />
      <button id='remove' onClick={removeval}>remove value</button>
    </>
  )
}

export default App
