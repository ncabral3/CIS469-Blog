// eslint-disable-next-line no-unused-vars
import React from 'react';
import "/Users/ncabr/Desktop/CIS469Project/CIS469-Blog/blog-project/src/Home/css/Home.css"; // Assuming the path is relative to the current file
import { Link } from 'react-router-dom';

const Home = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = '/create';
    };
    return (
        <div className="home"> 
            <div className="home_header">
                <h1>Blogs</h1>
            </div>

            <div className="home_container">
            </div>
            <div className="create-container">
            <form onSubmit={handleSubmit}>
                    <button className="create_button" type="submit">Create Post</button>
                    <Link to='/'>
                    <button className="logout" type="logout">Log Out</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Home;