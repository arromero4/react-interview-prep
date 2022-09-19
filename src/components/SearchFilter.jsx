import React, { useEffect, useState } from "react";

export default function SearchFilter() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([])
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    if(searchQuery){
      const searched = setTimeout(() =>{
        setSearched(
          users.filter((user) => {
            return Object.values(user)
            .join("")
            .toLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
          })
        )
      }, 1000)
      return () => clearTimeout(searched)
    }else{
      setUsers(users)
    }

  }, [searchQuery]);

  return (
    <div>
      <h1>SearchFilter</h1>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search"
        type="text"
        placeholder="search users"
      />
      <div className="grid-main">
        {searchQuery.length > 0 ? (
          searched.map((search) => {
            return(
              <div className="grid-child">
              <h2 key={search.id}>{search.name}</h2>
              <p>{search.username}</p>
            </div>
            )
          })
        ):(
          users.map((user) => (
            <div className="grid-child">
              <h2 key={user.id}>{user.name}</h2>
              <p>{user.username}</p>
            </div>
          ))
        )}
  
      </div>
    </div>
  );
}
