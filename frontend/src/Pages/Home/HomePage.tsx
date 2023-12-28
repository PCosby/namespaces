import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import User from '../../Models/User';
import CarouselTemplate from '../../UITemplates/CarouselTemplate';


const HomePage: React.FC<{ user: User | undefined }>
  = ({ user }) => {

    const navigate = useNavigate()

    useEffect(() => {
      if (!user) navigate('/login')
    }, [user, navigate])

    return (
      <Container>
        <div className='display-2 py-3'>Welcome, <b>{user?.name}</b></div>
        <h2 className='d-flex justify-content-center py-5'>Your namespaces</h2>
        <CarouselTemplate users={[user, user, user, user]} />
      </Container>
    );
  };

export default HomePage;
