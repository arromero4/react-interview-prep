import React, { useEffect } from "react";

export default function PromisesJS() {


  const promiseExample = (paramOne) => {
    return new Promise((resolve, reject) =>{
      let isChocolateEveryDay = true
      if(isChocolateEveryDay){
        resolve('Promise Resolved')
      }
      else{
        reject('Promise rejected')
      }
    })
  }

    const mainPromise = async () =>{
     try {
      let res = await promiseExample(true)
      console.log(res)
     } catch (error) {
      console.log('Promise Rejected')
     }
      
      
    }




  useEffect(() => {
    mainPromise();
  }, []);

  return <div>PromisesJS</div>;
}
