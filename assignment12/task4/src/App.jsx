import {React, useState} from 'react'
import Item from './Item';

const App=()=>{
  const [list,setlist]=useState([]);
  const [input,setinput]=useState("");
  const [count,setcount]=useState(0);

  const handleAddItemsInList=()=>{
    setlist((prev)=>[...prev,{id:count,content:input}]);
    setcount((prev)=>prev+1);
    setinput("");
  }

  const handleDeleteItemsInList=(id)=>{
    setlist((prev)=>prev.filter(el=>el.id!=id))
  }

  return (
    <div>
      <input value={input} onChange={(e)=>setinput(e.target.value)} type="text" />
      <button onClick={handleAddItemsInList}>Submit</button>
    {list.length==0?(<h1>No tasks yet. Add one above!</h1>):(<div>
      <ul>
        <h1>Here are the Items:-</h1>
      {list.map((el)=>{
        return <li><Item id={el.id} content={el.content} handleDeleteItemsInList={handleDeleteItemsInList}/></li>
      })}
      </ul>
    </div>)}
      </div>
  )
}
export default App;