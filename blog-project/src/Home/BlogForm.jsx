import React, { useState } from 'react';
import './css/BlogForm.css';
import { Link } from 'react-router-dom';

const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
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

        <Link to='/home'>
        <button className="submit" type="submit">Submit</button>
        </Link>

        <Link to='/home'>
        <button className = "back2" type="button">&#8592;</button>
        </Link>
      </form>
    </div>
  );
};

export default BlogForm;