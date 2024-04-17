/* Need to install Bootstrap CSS for full funcionality */

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [thread, setThread] = useState("");
    const [posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ thread });
        setThread("");
    };

    return (
        <div className="home d-flex flex-column align-items-center " style={{ height: "100vh" }}>
            <div className="text-center">
                <h1 className="homeTitle" style={{ width: "220vh", fontWeight: "bold" }}>Welcome to the Blog Forum</h1>
                <p className="homeDescription">Share your thoughts, ideas, and stories with others!</p>
            </div>
            <form onSubmit={handleSubmit} className="button">
                <button type="submit" className="btn btn-primary">CREATE POST</button>
            </form>
            <div className="Blogposts align-items-center">
                <h2 className="mb-4" style={{ width: "200vh" }}>Blog Posts</h2>
                {/* Placeholder for displaying blog posts */}
            </div>
        </div>
    );
};

export default Home;