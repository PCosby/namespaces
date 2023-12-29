import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import User from '../../Models/User';
import CarouselTemplate from '../../UITemplates/CarouselTemplate';
import Role, { allRolesForUser } from '../../Models/Role';


const HomePage: React.FC<{ user: User | undefined }>
  = ({ user }) => {

    const navigate = useNavigate()
    const [userRoles, setUserRoles] = useState<Role[]>([])

    useEffect(() => {
      if (!user) return navigate('/login')
      if (userRoles.length === 0) allRolesForUser(user!).then(setUserRoles)

    }, [user, navigate, userRoles])

    return (
      <Container>
        <div className='display-2 py-3'>Welcome, <b>{user?.name}</b></div>
        <h2 className='d-flex justify-content-center py-5'>Your namespaces</h2>
        <CarouselTemplate roles={userRoles} />
      </Container>
    );
  };

export default HomePage;
