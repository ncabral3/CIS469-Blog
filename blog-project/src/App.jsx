import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './auth/login';
import Register from './auth/register';
import Home from './Home/Home';
import BlogForm from './Home/BlogForm';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>                
                <Route path='/register' element={ <Register /> } />
                <Route path='/' element={ <Login /> } /> 
                <Route path='/home' element={ <Home /> } /> 
                <Route path='/create' element={ <BlogForm /> } />      
      
            </Routes>
        </BrowserRouter>
    );
};

export default App;