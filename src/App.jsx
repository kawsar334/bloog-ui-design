import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import SinglePage from './pages/singlepage/SinglePage';
import Write from './pages/write/Write';

function App() {



  return (
    <div className=''>
<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/post/:id' element={<SinglePage />} />
        <Route path='/post/' element={<Write />} />


</Routes>
    </div>
  );
}

export default App;
