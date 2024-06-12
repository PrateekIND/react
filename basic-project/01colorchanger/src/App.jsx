import { useState } from "react"
import Button from "./Button"


function App() {
  const [color,setcolor]=useState("olive")

  return (
    <>
     <div className="w-full h-screen flex justify-center flex-col items-center"
     style={{backgroundColor:color}}>
     <p className='text-2xl'><strong className='text-4xl'><i>hello guys</i></strong> </p>
     <br /> <br />
     <p className='text-2xl'>today we are going to create a setup that uses button to change the color of the background</p>
      <br />
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>{setcolor("red")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
        
        <button onClick={()=>{setcolor("Green")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Green"}}>Green</button>
        
        <button onClick={()=>{setcolor("Blue")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}}>Blue</button>
        
        <button onClick={()=>{setcolor("Yellow")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Yellow"}}>Yellow</button>
        
        <button onClick={()=>{setcolor("Olive")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Olive"}}>Olive</button>
        
        <button onClick={()=>{setcolor("Gray")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Gray"}}>Gray</button>
        
        <button onClick={()=>{setcolor("White")}}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "White"}}>White</button>
        
        <button onClick={()=>{setcolor("Lavender")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Lavender"}}>Lavender</button>
        
        <button onClick={()=>{setcolor("Black")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Black"}}>Black</button>
        </div>
      </div>
     </div>
     
    </>
  )
}

export default App
