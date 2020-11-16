import React, { useState, useEffect } from "react";
import axios from "axios";

function Firstapp() {
  const [count, setCount] = useState(1);
  const [morning, setMornning] = useState(true);
  let [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Hello Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament Data</button>
      <button onClick={() => setCount(count - 1)}>Decreament Data</button>
      <br /> <br />
      <div className={morning ? "morning" : "evening"}>
        <h4>Good: {morning ? "Morning" : "Evening"}</h4>
        <button onClick={() => setMornning(!morning)}>Update Day</button>
      </div>
      <br /> <br />
      <ul>
        {post.map((v) => {
          return (
            <li key={v.id}>
              {v.id} {v.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Firstapp;
