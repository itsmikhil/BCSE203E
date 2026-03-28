import React from 'react'

const Alert = ({children,variant}) => {
  return (
    <div>
        <p className={`${variant=="success" && "green"} ${variant=="warning" && "orange"} ${variant=="error" && "red"}`}>{children}</p>
    </div>
  )
}

export default Alert