import React from "react";
import HighOrderComponent from "./HighOrderComponent.jsx";

function PostHoc({ data }) {
  return (
    <div>
      <h2>PostHoc</h2>

      {data.slice(0, 10).map((post) => (
        <p>{post.body}</p>
      ))}
    </div>
  );
}

const PostsComp = HighOrderComponent("Post", PostHoc, "posts");
export default PostsComp;
