import React from 'react'

const Greetings=({name,time})=>{
    // style in index.css
    return (
        <div className='greeting'>Good {time}, {name}</div>
    )
}

export default Greetings