import React, { useState ,useEffect} from 'react'
// import { useLoaderData } from 'react-router-dom'


function Github() {

  // const data = useLoaderData()
  const [data,setdata] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res=>res.json())
    .then(data=>{
      setdata(data)
    })
  },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers: {data.followers}
 
    
    </div>

  )
}

export default Github

// export const githubinfo = async () =>{
//   const res = await fetch('https://api.github.com/users/hiteshchoudhary')
//   return res.json()
// }