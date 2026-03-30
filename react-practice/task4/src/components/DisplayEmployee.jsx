import React from 'react'

const DisplayEmployee = ({employee}) => {
    console.log(employee)
  return (
    <div className='emps'>
        {employee.map((el)=>{
            return <div className="emp">
                <h3>{el.name}({el.dept})</h3>
                <h3>{el.sal}</h3>
            </div>
        })}
    </div>
  )
}

export default DisplayEmployee