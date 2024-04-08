import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './auth/login';
import Register from './auth/register';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>                
                <Route path='/register' element={ <Register /> } />
                <Route path='/' element={ <Login /> } />                    
            </Routes>
        </BrowserRouter>
    );
};

export default App;