import React, {useEffect, useState} from "react";
import axios from "axios";


export default function DebouncingJS() {

  const pinAPI = "https://api.postalpincode.in/pincode/";

  const [pin, setPin] = useState('')


  useEffect(() => {
    const debouncing = setTimeout(()=>{
      try {
        axios.get(`https://api.postalpincode.in/pincode/${pin}`)
        .then((response) => 
        console.log(response.data[0].PostOffice));
      } catch (error) {
        console.error(error);
      }
    },2000)
    return () => {
      clearTimeout(debouncing)
    }
  }, [pin])
  
  return (
    <div>
      <h1>POSTAL CODE - DEBOUNCING</h1>
      <input
        onChange={(e) => setPin(e.target.value)}
        type="text"
        placeholder="Enter your pin code"
      />
      
    </div>
  );
}
