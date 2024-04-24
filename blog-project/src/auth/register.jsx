// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './css/register.css';
import { Link } from 'react-router-dom';
import user_icon from '../Components/Objects/user-interface.png';
import password_icon from '../Components/Objects/padlock.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';


//import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    function validateForm(event) {
        event.preventDefault();
        if (username === '' || password === '' || confirmPassword === '') {
            toast.error('Fill out all fields to register.', {
                position: "top-center" , 
                autoClose: 2800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                PauseOnFocusLoss: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
                
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match.', {
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
            return;
        }
        
        toast.success('Registration Successful!', {
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
        
    
        setUsername('');
        setPassword('');
        setConfirmPassword('');

    }

    return (
        <>
            <title>Blog - Register</title>
            <div className='container2'>
                <div className='header2'>
                    <div className='text2'>Register</div>
                    <div className='underline2'></div>
                </div>
                <form className='Inputs2' onSubmit={validateForm}>
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
                        <button type='button' className='back'>
                            Back
                        </button>
                    </Link>
                </form>
                <ToastContainer />
            </div>
            
        </>
    );
};

export default Register;