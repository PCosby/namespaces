import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/Forms/SignUp';
import Login from './Pages/Forms/Login';
import HomePage from './Pages/Home/HomePage';
import TopBar from './Layout/TopBar';
import './App.css'
import Footer from './Layout/Footer';
import UserProfile, { getUserProfile } from './Models/Helpers/UserProfile';

function App() {

  const [userProfile, setUserProfile] = useState<UserProfile | undefined>(undefined)

  useEffect(() => {
    getUserProfile().then(setUserProfile)
  }, [])

  return (
    <Router>
      {userProfile && <TopBar setUserProfile={setUserProfile} userProfile={userProfile}/>}
      <Routes>
        <Route path='/signup' element={<SignUp userProfile={userProfile} setUserProfile={setUserProfile} />} />
        <Route path='/login' element={<Login userProfile={userProfile} setUserProfile={setUserProfile} />} />
        <Route path='/' element={<HomePage userProfile={userProfile} />} />
        <Route path='/home' element={<HomePage userProfile={userProfile} />} />
      </Routes>
      {userProfile && <Footer/>}
    </Router>
  );
}

export default App;

/* 
TODO:
user profile data type: user, user roles, all namespaces, all servers
fix UI for homepage
*/