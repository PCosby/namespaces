import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CarouselTemplate from '../../UITemplates/CarouselTemplate';
import UserProfile from '../../Models/Helpers/UserProfile';
import Role from '../../Models/Role';


const HomePage: React.FC<{ profile: UserProfile | undefined }>
  = ({ profile }) => {

    const navigate = useNavigate()
    let filteredRoles: Role[] = profile ? profile.userRoles.filter((r: Role) =>
      !profile.searchText || r.ns.name.includes(profile.searchText)) : []

    useEffect(() => {
      if (!profile) return navigate('/login')
    }, [profile, navigate])

    return (
      <Container>
        <div className='display-2 py-3 mb-5'>Welcome, <b>{profile?.user?.name}</b></div>
        <h2 className='d-flex justify-content-center mb-3 py-4 border-bottom'>Your namespaces</h2>
        <CarouselTemplate roles={filteredRoles} />
      </Container>
    );
  };

export default HomePage;
