import React, { useEffect, useState } from "react";
function MapAndFilter() {
    const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      // .then(json => console.log(json))
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {

    let filterData = users.filter((user) => {
      return user.id <= 5;
    });

    setUsers(filterData);

  };
  return (
    <div className="container border h-100">
      <h1 className="justify-content-center align-items-center text-center">
        Users
      </h1>
      <div className="row d-flex flex-nowrap justify-content-center align-items-center border border-primary mx-auto h-100">
        <div className="row">
          {users.map((user) => (
            <div className="col gap-2 p-2" key={user.id}>
              <div className="card rounded ">
                <div className="card-header bg-secondary text-white">
                  <label>User: {user.name}</label>
                  
                </div>
                <div className="card-body">
                  <label>Username: {user.username}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-primary" onClick={mapData}>
          See map array
        </button>
      </div>
    </div>
  )
}

export default MapAndFilter