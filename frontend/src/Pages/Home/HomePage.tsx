import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CarouselTemplate from '../../UITemplates/CarouselTemplate';
import UserProfile from '../../Models/Helpers/UserProfile';


const HomePage: React.FC<{ userProfile: UserProfile | undefined }>
  = ({ userProfile }) => {

    const navigate = useNavigate()

    useEffect(() => {
      if (!userProfile) return navigate('/login')

    }, [userProfile, navigate])

    return (
      <Container>
        <div className='display-2 py-3'>Welcome, <b>{userProfile?.user?.name}</b></div>
        <h2 className='d-flex justify-content-center py-5'>Your namespaces</h2>
        <CarouselTemplate roles={userProfile?.userRoles || []} />
      </Container>
    );
  };

export default HomePage;
