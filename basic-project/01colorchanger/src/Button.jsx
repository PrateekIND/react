import React from 'react'

function Button(name="olive") {
  return (
    <button  
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: name}}>{name}</button>
  )
}

export default Button
