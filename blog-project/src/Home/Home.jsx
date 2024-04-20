// eslint-disable-next-line no-unused-vars
import React from 'react';
import "/Users/ncabr/Desktop/CIS469Project/CIS469-Blog/blog-project/src/Home/css/Home.css"; // Assuming the path is relative to the current file
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';
import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

  // Function to handle submitting blog post data
  const handleSubmit = (blogData) => {
    setBlogs([...blogs, blogData]);
  };
    return (
        <div className="home"> 
            <div className="home_header">
                <h1>BLOGS</h1>
            </div>

            <div className="home_container">
        {/* Map over submitted blog posts and render them */}
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>

            <div className="create-container">
            <form onSubmit={handleSubmit}>
                    <Link to='/create'>
                    <button className="create_button" type="submit">Create Post</button>
                    </Link>
                    <Link to='/'>
                    <button className="logout" type="logout">Log Out</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Home;