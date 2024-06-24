import { useState, useEffect ,useCallback,useRef} from 'react'



function App() {
  const [length, setlength]= useState(8)
  const [numallow, setnumallow]= useState(false)
  const [charallow, setcharallow]= useState(false)
  const [pass,setpass] = useState("")
  const [copied, setcopied] = useState(false)
  const passRef = useRef(null)

  const passgen =useCallback(()=>{
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let char ="&$@#?!^*+-/~`=_<>"
    let num = "0123456789"
    let allstr = str
    if(numallow){
      allstr += num
    }
    if(charallow){
      allstr += char
    }
    for(let i = 1; i <= length; i++){
      password += allstr.charAt(Math.floor(Math.random() * allstr.length+1))
    }

    setpass(password)

  },[length,numallow,charallow,setpass])

  const copypass = useCallback(()=>{
    window.navigator.clipboard.writeText(pass)
    passRef.current?.select();
    passRef.current?.setSeletionRange(0,101);
  },[pass,setpass])

  useEffect(()=>{
    passgen()
  },[length,numallow,charallow,passgen])
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-2 mt-5 text-orange-400 bg-gray-600'>
      <h1 className='my-3 text-center text-3xl text-white font-bold'>Password Generator</h1>
      <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={pass}
        className='outline-none px-3 w-full py-1'
        placeholder='password'
        readOnly
        ref={passRef}/>
        <button onClick={copypass}
        className='outline-none bg-blue-700 text-white px-3 py-0 shrink-0
        opacity-100 hover:opacity-75 active:opacity-40 transition-opacity'>copy</button>  
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setlength(e.target.value)}
          />
          
          <label>Length:{length}</label>


        </div>
        <div className='flex items-center gap-x-1'>
        <label className='flex items-center'>
          <input type="checkbox"
            checked={numallow}
            id='numberInput'
            onChange={()=>{
              setnumallow(!numallow)
            }}
            className='mr-2'/>
            Numbers
          </label>
          <label className='flex items-center'>
            <input type="checkbox"
            checked={charallow}
            id='charInput'
            onChange={()=>{
              setcharallow(!charallow)
            }}
            className='mr-2'/>
            Special Characters
          </label>
        </div>

      </div>
    </div>

    </>
  )
}

export default App

// 35min