import React from 'react'

const Edit = ({task, settask,handleEditAfter}) => {
  return (
    <div className='edit'>
        <input
        value={task}
        onChange={(e) => settask(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={handleEditAfter}>Edit</button>
    </div>
  )
}

export default Edit