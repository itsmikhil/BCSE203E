import React from 'react'
import { useState } from 'react';
import Greeting from './Greeting';

const App=()=>{
  const [name,setname]=useState("");
  const [time,settime]=useState(null);
    return (

      // style in index.css
      
        <div className='main'>
          <h1>Interactive Greeting App</h1>
          <input onChange={(e)=>setname(e.target.value)} value={name} type="text" name="name" placeholder='Enter Name' id="" />
          <input onChange={(e)=>settime(e.target.value)} value={time} type="Number" name="name" placeholder='Enter Hour(0-23)' id="" />
          <Greeting name={name} time={time}/>
        </div>
    )
}

export default App;