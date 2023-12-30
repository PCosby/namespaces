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

  const [profile, setProfile] = useState<UserProfile | undefined>(undefined)

  useEffect(() => {
     getUserProfile(setProfile)
      .catch(() => {setProfile(undefined)})
  }, [])

  return (
    <Router>
      {profile && <TopBar profile={profile} />}
      <Routes>
        <Route path='/signup' element={<SignUp profile={profile} setProfile={setProfile} />} />
        <Route path='/login' element={<Login profile={profile} setProfile={setProfile} />} />
        <Route path='/' element={<HomePage profile={profile} />} />
        <Route path='/home' element={<HomePage profile={profile} />} />
      </Routes>
      {profile && <Footer />}
    </Router>
  );
}

export default App;

/* 
TODO:
fix UI for homepage
*/