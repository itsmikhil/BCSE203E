import React from 'react'
import { useState } from 'react'
import studentInfo from './students.json'
import { useEffect } from 'react'

const App = () => {
  const [data, setdata] = useState(studentInfo)
  const [displayData, setdisplayData] = useState(studentInfo)
  const [input, setinput] = useState("")
  const [category, setcategory] = useState("all")
  const addFields=()=>{
    let result=studentInfo.map((el)=>{
      let total=el.marks.Math+el.marks.Science+el.marks.English;
      let avg=(total/3).toFixed(2);
      return {...el,total,avg,status:avg>=75?"Pass":"Fail"}
    })
    setdata(result);
    setdisplayData(result);
  }

  const handleSearchByName=(e)=>{
    let val=e.target.value;
    setinput(val);
    let result=data.filter((el)=>el.name.includes(val));
    setdisplayData(result);
  }

  const handleSearchByStatus=(e)=>{
    let val=e.target.value;
    setcategory(val);
    if(val=="all"){
      setdisplayData(data);
      return;
    }
    let result=data.filter((el)=>el.status.toLowerCase()===val);
    setdisplayData(result);
  }

  const handleSortByName=()=>{
    let result=data.sort((a,b)=>a.name.localeCompare(b.name));
    setdisplayData([...result]);
  }
  const handleSortByTotal=()=>{
    let result=data.sort((a,b)=>a.total-b.total);
    setdisplayData([...result]);
  }

  const handleDefault=()=>{
    setdisplayData([...data]);
  }

  useEffect(()=>{
    addFields();
  },[])
  return (
    <div>
      <input className='border-1' value={input} onChange={(e)=>handleSearchByName(e)} type="text" name="" id="" />
      <select className='border-1' value={category} onChange={(e)=>handleSearchByStatus(e)} name="" id="">
        <option value="all">all</option>
        <option value="pass">pass</option>
        <option value="fail">fail</option>
      </select>
      <button className='border-1'  onClick={()=>handleSortByName()}>Sort By Name</button>
      <button className='border-1'  onClick={handleSortByTotal}>Sort By Total</button>
      <button className='border-1'  onClick={handleDefault}>Default</button>
      <table>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Class</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
          <th>Total</th>
          <th>Average</th>
          <th>Result</th>
        </tr>
        {displayData.map((el)=>{
          return <tr className={`${el.status=="Fail"?"text-red-600":"text-black"}`}>
            <td>{el.roll}</td>
            <td>{el.name}</td>
            <td>{el.class}</td>
            <td>{el.marks.Math}</td>
            <td>{el.marks.Science}</td>
            <td>{el.marks.English}</td>
            <td>{el.total}</td>
            <td>{el.avg}</td>
            <td>{el.status}</td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default App