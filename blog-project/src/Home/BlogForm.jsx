import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/BlogForm.css';

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the addBlog function passed from Home.jsx
    addBlog({ title, content });
    console.log('Blog added:', { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="blog-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange} />

        {/* Use a regular button for form submission */}
        <Link to ='/home'>
        <button className = "back2" type="submit">&#8592;</button>
        </Link>
        <Link to ='/home'>
        <button className="create_button" type="submit">Create Post</button>
        </Link>
      </form>
    </div>
  );
};

export default BlogForm;
