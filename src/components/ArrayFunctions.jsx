import React, {useEffect}from 'react'

export default function ArrayFunctions() {

  const fnArray = [
    {
      fn: function add(a,b){
        return a+b
      }
    },    {
      fn: function substract(a,b){
        return a-b
      }
    },    {
      fn: function multiply(a,b){
        return a*b
      }
    },    {
      fn: function divide(a,b){
        return a*b
      }
    },
    // function fn(a,b){
    //   return a-b
    // },
    // function fn(a,b){
    //   return a*b
    // },
    // function fn(a,b){
    //   return a/b
    // },
  ]

  const mainFn = () =>{
    let result = fnArray.map((fn) =>{
      return fn.fn(3,2)
    })

    console.log(result)
  }

  useEffect(() =>{
    mainFn()
  })
  return (
    <div>
        <h1>ArrayFunctions</h1>
        <p></p>
    </div>
  )
}
