import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/Forms/SignUp';
import Login from './Pages/Forms/Login';
import HomePage from './Pages/Home/HomePage';
import TopBar from './Layout/TopBar';
import './App.css'
import Footer from './Layout/Footer';

function App() {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  return (
    <Router>
      {user && <TopBar setUser={setUser} user={user}/>}
      <Routes>
        <Route path='/signup' element={<SignUp user={user} setUser={setUser} />} />
        <Route path='/login' element={<Login user={user} setUser={setUser} />} />
        <Route path='/' element={<HomePage user={user} />} />
        <Route path='/home' element={<HomePage user={user} />} />
      </Routes>
      {user && <Footer/>}
    </Router>
  );
}

export default App;
