import React, { useState, useEffect } from "react";
import axios from 'axios'
export default function HighOrderComponent(title, Component, request) { 

 

  return function HOC () {
    const [data, setData] = useState([])

    const getData = async () => {
      try {
        await axios.get(`https://jsonplaceholder.typicode.com/${request}`)
        .then(response => setData(response.data))
      } catch (error) {
        console.error(error)
      }
      
    }
    useEffect(() => {
      getData()
    },[])
    return( <div>
      <h2>{title}</h2>
      <Component data={data}/>
    </div>)
  }

  
}
