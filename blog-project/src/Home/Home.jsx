import React, { useState, useEffect } from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Read JSON file
    fetch()
      .then(response => response.json())
      .then(data => {
        // Extract title and content from JSON data
        const blogTitles = data.map(blog => blog.title);
        const blogContents = data.map(blog => blog.content);

        // Create an array of blog objects with title and content
        const blogList = blogTitles.map((title, index) => ({
          title,
          content: blogContents[index]
        }));

        // Set the blogs state with the blog list
        setBlogs(blogList);
      })
      .catch(error => {
        console.error('Error reading file:', error);
      });
  }, []);

  return (
    <div className="home"> 
      <div className="home_header">
        <h1>BLOGS</h1>
      </div>

      <div className="home_container">
        <div className="blog-list">
       <h1>Example Title</h1>
       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum lectus at orci vulputate, ac ultrices diam vehicula. Duis pretium risus at convallis convallis. Cras venenatis, sem quis rutrum fermentum, sapien nulla accumsan ligula, ut varius justo ligula nec nulla. Nulla in tellus nec orci interdum efficitur. Morbi nec eros luctus, convallis tortor nec, fringilla mauris. Fusce vitae leo vitae libero gravida vehicula. Vivamus suscipit est eget lectus malesuada, in vehicula quam facilisis. Integer sed elit id libero lacinia egestas. Sed interdum sapien a nunc rutrum, nec fermentum sapien feugiat.
       <hr className="divider">
        </hr>
</h2>
      </div>
      </div>

      <div className="create-container">
        {/* Pass addBlog function as a prop to BlogForm */}
        <Link to='/'>
          <button className="logout" type="button">Log Out</button>
        </Link>
        <Link to='/create'>
          <button className="create-button-home" type="button">Create</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
