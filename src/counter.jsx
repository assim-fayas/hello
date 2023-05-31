import React from 'react'

function Counter({title,{...obj1}}) {
  return (
    <div>
        <h1>{title} : {count} </h1>
    </div>
  )
}

export default Counter