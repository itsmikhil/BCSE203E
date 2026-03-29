import React from 'react'

const App = () => {
  let prev=null;
  const handleZIndex=(e)=>{
    console.log(e.classList.add("active"))
    console.log(e.classList);
    if(prev!=null){
      prev.classList.remove("active");
    }
    prev=e;
  }
  return (
    <div>
      <div onClick={(e)=>handleZIndex(e.target)} className="container1">
        1
      </div>
      <div onClick={(e)=>handleZIndex(e.target)} className="container2">
        2
      </div>
      <div onClick={(e)=>handleZIndex(e.target)} className="container3">
        3
      </div>
    </div>
  )
}

export default App