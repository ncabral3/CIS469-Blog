import React, { useState } from 'react';
import axios from 'axios';
import './css/register.css';
import { Link } from 'react-router-dom';
import user_icon from '../Components/Objects/user-interface.png';
import password_icon from '../Components/Objects/padlock.png';

const Register = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', { username, password });
            console.log(response.data);
            // Handle success, maybe redirect the user to another page
        } catch (error) {
            console.error('Error registering user:', error);
            // Handle error, show an error message to the user
        }
    };

    return (
        <>
        <title>Blog - Register</title>
        <div className='container2'>
            <div className='header2'>
                <div className='text2'>Register</div>
                <div className='underline2'></div>
            </div>
            <form className='Inputs2' onSubmit={handleSubmit}>
                <div className='Input2'>
                    <img src={user_icon} alt='' />
                    <input 
                        type='text' 
                        placeholder='Create Username' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className='Input2'>
                    <img src={password_icon} alt='' />
                    <input 
                        type='password' 
                        placeholder='Create Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className='Input2'>
                    <img src={password_icon} alt='' />
                    <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                </div>
                <button type='submit' className='submit2'>
                    Create Account
                </button>
                <Link to='/'>
                    <button type='back' className='back'>
                        Back
                    </button>
                </Link>
            </form>
        </div>
    </>
    );
};

export default Register;