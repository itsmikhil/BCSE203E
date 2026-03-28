import React from 'react'
import { useState } from 'react'
import Alert from './Alert';

const App = () => {
  const [variant,setvariant]=useState("success");
  const [children,setchildren]=useState("This is a sucess alert");
  return (
    <div>
      <button onClick={()=>{
        setvariant("success");
        setchildren("This is a sucess alert")
      }}>Sucess Alert</button>
      <button onClick={()=>{
        setvariant("warning");
        setchildren("This is a warning alert")
      }}>Warning Alert</button>
      <button onClick={()=>{
        setvariant("error");
        setchildren("This is a error alert")
      }}>Error Alert</button>
      <Alert children={children} variant={variant}/>
    </div>
  )
}

export default App