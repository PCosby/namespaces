import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/Forms/SignUp';
import Login from './Pages/Forms/Login';
import HomePage from './Pages/Forms/Home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
