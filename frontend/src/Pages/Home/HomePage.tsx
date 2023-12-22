import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import User from '../../Models/User';


const HomePage: React.FC<{ user: User | undefined }>
  = ({ user }) => {

    const navigate = useNavigate()

    useEffect(() => {
      if (!user) navigate('/login')
    }, [user, navigate])

    return (
      <Container>
        <h1>My Namespaces</h1>
        {user && <h2>{user.name}</h2>}
      </Container>
    );
  };

export default HomePage;
