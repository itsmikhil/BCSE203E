import React from 'react'

const Item = ({id,content,handleDeleteItemsInList}) => {
  return (
    <div>
        <p>{content}</p>
        <button onClick={()=>handleDeleteItemsInList(id)}>Delete</button>
    </div>
  )
}

export default Item