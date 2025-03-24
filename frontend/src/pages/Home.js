// pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";

  useEffect(() => {
    axios.get(`${apiUrl}/posts/`)
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));

    fetch(`${apiUrl}/endpoint`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Erro ao acessar a API:", error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="card mb-2">
          <div className="card-body">
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
