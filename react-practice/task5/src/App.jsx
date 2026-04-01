import React, { useState } from 'react'

const App = () => {
  const [list, setlist] = useState([])
  const [displayList, setdisplayList] = useState([])
  const [input, setinput] = useState()
  const handleSubmit=()=>{
    setlist((prev)=>[...prev,input])
    setdisplayList((prev)=>[...prev,input])
    setinput("");
  }
  const handleEven=()=>{
    let result=list.filter((el)=>el%2==0);
    setdisplayList(result);
  }
  const handleOdd=()=>{
    let result=list.filter((el)=>el%2!=0);
    setdisplayList(result);
  }
  const handleAsc=()=>{
    let result=list.sort((a,b)=>a-b);
    setdisplayList([...result]);
  }
   const handleDesc=()=>{
    let result=list.sort((a,b)=>b-a);
    setdisplayList([...result]);
  }
  return (
    <div>
      <input value={input} onChange={(e)=>setinput(Number(e.target.value))} type="number" name="" id="" />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleEven}>Even</button>
      <button onClick={handleOdd}>Odd</button>
      <button onClick={handleAsc}>Asc</button>
      <button onClick={handleDesc}>Desc</button>
      {displayList.map((el)=>{
        return <p>{el}</p>
      })}
    </div>
  )
}

export default App