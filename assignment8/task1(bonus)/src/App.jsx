import React, { StrictMode } from 'react'
import Greetings from './Greetings';

const App=()=>{
  return (
    <div>
      <Greetings name={"Ram"} time={6}/>
      <Greetings name={"Shyam"} time={14}/>
      <Greetings name={"Lakshman"} time={19}/>
    </div>
  )
}

export default App;