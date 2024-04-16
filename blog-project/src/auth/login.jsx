import './css/login.css';
import { Link } from 'react-router-dom';
import user_icon from '../Components/Objects/user-interface.png';
import password_icon from '../Components/Objects/padlock.png';

const Login = () => { 

   //Compare the username and password to credentials in the mongodb database
   //if the username and password are valid in the mongodb database then direct the user to the main blog page
   //if the username and password are not valid in the mongodb database then provide a toast message that the username and password are incorrect
   //Also provide toast messages for valid login

    return (
        <>
            <title>Blog - Login</title>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Login</div>
                    <div className='underline'></div>
                </div>
                <form className='Inputs'>
                    <div className='Input'>
                        <img src={user_icon} alt='' />
                        <input type='text' placeholder='Username' />
                    </div>
                    <div className='Input'>
                        <img src={password_icon} alt='' />
                        <input type='password' placeholder='Password' />
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
            </div>
        </>
    );
};

export default Login;