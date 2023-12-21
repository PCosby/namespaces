import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/Forms/SignUp';
import Login from './Pages/Forms/Login';
import HomePage from './Pages/Forms/Home/HomePage';

function App() {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp user={user}/>}/>
        <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/home' element={<HomePage user={user}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
