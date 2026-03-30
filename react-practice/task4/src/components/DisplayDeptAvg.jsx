import React from 'react'

const DisplayDeptAvg = ({deptAvg}) => {
  return (
    <div className="deptAvg">
        <h3>IT:-{deptAvg.IT}</h3>

        <h3>HR:-{deptAvg.HR}</h3>

        <h3>Finance:-{deptAvg.Finance}</h3>
    </div>
  )
}

export default DisplayDeptAvg