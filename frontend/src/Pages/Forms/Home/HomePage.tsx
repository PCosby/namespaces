import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { Role, getRolesFromUser, RoleValue } from '../../Models/Role';
// import User from '../../Models/User';



const HomePage
      = () => {
    
    const navigate = useNavigate()

    // const [roles, setRoles] = useState<Role[]>([])

    // useEffect( () => {
    //     if (!loggedIn) return navigate('/login')

    // getRolesFromUser(user, setRoles, ()=>{setRoles([])})

    // },[loggedIn])


  return (
    <Container>
      <h1>My Namespaces</h1>
    </Container>
  );
};

export default HomePage;
