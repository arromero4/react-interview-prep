import React, {useEffect} from "react";
import { getUsers } from "../helpers/getAllUsers";
import { addNums } from "../helpers/addTwo";

export default function HelperFunctions() {

  const getUsersHelper = async () =>{
    let data = await getUsers(`posts`);
    console.log(data);
  }

  const addTwoNumsHelper = () => {
    let sum = addNums(2,3)
    console.log(sum)
  }

  useEffect(() => {
    getUsersHelper()
    addTwoNumsHelper()
  }, []);

  return <div>
    <h1>Helper Functions</h1>
    <button onClick={addTwoNumsHelper}>Add</button>
  </div>;
}
