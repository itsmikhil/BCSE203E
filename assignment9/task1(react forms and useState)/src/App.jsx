import react, { useState } from 'react'

const App=()=>{
  const [name,setname]=useState("");
  const [text,settext]=useState("Hello");
  const func=()=>{
    settext(name?`Hello ${name}`:"Hello")
    setname("");
  }
  return (
    <div className='main'>
      <h3>{text}</h3>
      <input placeholder='Enter Name' onChange={(e)=>setname(e.target.value)} value={name} type="text" name="" id="" />
      <button onClick={func}>Click</button>
    </div>
  )
}
export default App;