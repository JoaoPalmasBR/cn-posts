// pages/Post.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/posts/`, { content }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/');
    } catch (error) {
      alert('Failed to post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <h2>New Post</h2>
      <textarea className="form-control mb-2" rows="3" value={content} onChange={e => setContent(e.target.value)} required />
      <button className="btn btn-primary w-100" type="submit">Post</button>
    </form>
  );
};

export default Post;
