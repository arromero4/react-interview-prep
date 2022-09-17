import React from 'react'
import { useState } from 'react'

function UseStatesJS() {
  const [count, useCount] = useState(0)
  return (
    <div className='container border p-4'>
      <h1>Counter: {count}</h1>
     <div className='d-flex gap-2'>
     <button className='btn btn-primary' onClick={() => {
        useCount(count + 1)
      }}>
        Increment
      </button>
    
      <button className='btn btn-warning' onClick={() => {
        useCount(count - 1)
      }}>
        Decrement
      </button>
      <button className='btn btn-danger' onClick={() => {
        useCount(0)
      }}>
        Reset
      </button>
     </div>
    </div>
  )
}

export default UseStatesJS