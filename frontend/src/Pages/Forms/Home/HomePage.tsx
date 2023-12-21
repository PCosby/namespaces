import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import User from '../../../Models/User';
// import { Role, getRolesFromUser, RoleValue } from '../../Models/Role';



const HomePage: React.FC<{ user: User | undefined}>
= ({ user}) => {
    
    const navigate = useNavigate()

    useEffect(() => {
      if (!user) navigate('/login')
    }, [user, navigate])

    // const [roles, setRoles] = useState<Role[]>([])

    // useEffect( () => {
    //     if (!loggedIn) return navigate('/login')

    // getRolesFromUser(user, setRoles, ()=>{setRoles([])})

    // },[loggedIn])


  return (
    <Container>
      <h1>My Namespaces</h1>
      {user && <h2>{user.name}</h2>}
    </Container>
  );
};

export default HomePage;
