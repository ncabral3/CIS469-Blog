// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './css/login.css';
import { Link } from 'react-router-dom';
import user_icon from '../Components/Objects/user-interface.png';
import password_icon from '../Components/Objects/padlock.png';
import { ToastContainer, toast } from 'react-toastify';
import creds from './user.json';
import { Flip } from 'react-toastify';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Find user in credentials JSON
        const user = creds.users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            // Valid credentials
            toast.success('Login Successful!', {
                position: "top-center",
                autoClose: 2801,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                PauseOnFocusLoss: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
        } else {
            // Invalid credentials
            toast.error('Invalid username or password', {
                position: "top-center",
                autoClose: 2801,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                PauseOnFocusLoss: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
        }
    };

    return (
        <>
            <title>Blog - Login</title>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Login</div>
                    <div className='underline'></div>
                </div>
                <form className='Inputs' onSubmit={handleSubmit}>
                    <div className='Input'>
                        <img src={user_icon} alt='' />
                        <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className='Input'>
                        <img src={password_icon} alt='' />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type='submit' className='submit'>
                        Sign In
                    </button>
                    <Link to='/register'>
                        <button type='register' className='register'>
                            Register Now
                        </button>
                    </Link>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;