import {React,useState} from 'react';

const App=()=>{
  const [count,setcount]=useState(0);

  const handleIncrement=()=>{
    setcount((prev)=>prev+1);
  }

  const handleDecrement=()=>{
    setcount((prev)=>prev-1);
  }

  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App;