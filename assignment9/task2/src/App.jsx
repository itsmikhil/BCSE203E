import react, { useState } from 'react'

const App=()=>{
  const [fname,setfname]=useState("");
  const [lname,setlname]=useState("");
  const [text,settext]=useState("Hello");
  const func=()=>{
    let result="Hello";
    if(fname.trim()){
      result+=` ${fname.trim()}`
    }
    if(lname.trim()){
      result+=` ${lname.trim()}`
    }
    settext(result);
    setfname("");
    setlname("");
  }
  return (
    <div className='main'>
      <h3>{text}</h3>
      <input placeholder='Enter First Name' onChange={(e)=>setfname(e.target.value)} value={fname} type="text" name="" id="" />
      <input placeholder='Enter Last Name' onChange={(e)=>setlname(e.target.value)} value={lname} type="text" name="" id="" />
      <button onClick={func}>Click</button>
    </div>
  )
}
export default App;