import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts, addPosts } from "./Posts.actions";

const Posts = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <button onClick={() => dispatch(getPosts())}>Get Posts</button>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={() => dispatch(addPosts({ title, description }))}>
        Add Item
      </button>
    </div>
  );
};

export default Posts;
