import {React, useState} from 'react'

const App=()=>{
  const [list,setlist]=useState([]);
  const [input,setinput]=useState("");

  const handleAddItemsInList=()=>{
    setlist((prev)=>[...prev,input]);
  }

  return (
    <div>
      <input value={input} onChange={(e)=>setinput(e.target.value)} type="text" />
      <button onClick={handleAddItemsInList}>Submit</button>
    {list.length==0?(<h1>No Items in List</h1>):(<div>
      <ul>
        <h1>Here are the Grocery Item:-</h1>
      {list.map((el)=>{
        return <li>{el}</li>
      })}
      </ul>
    </div>)}
      </div>
  )
}
export default App;