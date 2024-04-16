import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogForm from './BlogForm';
import Login from './auth/login';
import Register from './auth/register';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>                
                {/* <Route path='/register' element={ <Register /> } /> */}
                <Route path='/' element={ <BlogForm /> } />                    
            </Routes>
        </BrowserRouter>
    );
};

export default App;