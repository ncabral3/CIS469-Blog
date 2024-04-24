import React, { useState } from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Function to handle adding new blog post
  const addBlog = (blogData) => {
    setBlogs([...blogs, blogData]);
  };

  return (
    <div className="home"> 
      <div className="home_header">
        <h1>BLOGS</h1>
      </div>

      <div className="home_container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>

      <div className="create-container">
        {/* Pass addBlog function as a prop to BlogForm */}
        <Link to='/'>
          <button className="logout" type="button">Log Out</button>
        </Link>
        <Link to='/create'>
        <button className="create_button" type="button">Create</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
