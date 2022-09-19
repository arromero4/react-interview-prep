import React from 'react'
import useJSONPlaceHolder from '../hooks/useJSONPlaceHolder.js'

export default function CustomHooks() {
let {users, posts} = useJSONPlaceHolder()
  return (
    <div>
        <h1>Custom Hook</h1>
        <h3>Users</h3>
        {
            users.map((item) => ( <h3 key={item.id}>{item.name}</h3>))
        }
        <hr />
        <h3>Posts</h3>
        {
            posts.map((item) => (<p key={item.id}>{item.title}</p>))
        }
    </div>
  )
}
