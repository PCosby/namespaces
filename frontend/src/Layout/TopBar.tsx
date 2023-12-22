import React from 'react';
import { Container, Navbar, Nav, FormControl, Button, InputGroup } from 'react-bootstrap';
import { FaBars, FaHome, FaSearch, FaServer, FaSignOutAlt } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { BsBoxes } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';


const TopBar: React.FC<{ setUser : Function}>
  = ({setUser }) => {

    const navigate = useNavigate()

    const logout = () => {
      localStorage.setItem('user', '')
      setUser(undefined)
      navigate('/login')
    }

    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid className='nav-link-text'>
            <Navbar.Brand as={Link} to="/home" className='d-flex align-items-center'><FaBars /></Navbar.Brand>
            <Nav className="justify-content-center flex-grow-1">
              <Link to="/home" className="nav-link px-5 d-flex align-items-center"><FaHome className='mx-2' /> Home</Link>
              <Link to="/namespaces" className="nav-link px-5 d-flex align-items-center"><BsBoxes className='mx-2' /> NameSpaces</Link>
              <Link to="/servers" className="nav-link px-5 d-flex align-items-center"><FaServer className='mx-2' /> Servers</Link>
              <Link to="/requests" className="nav-link px-5 d-flex align-items-center"><IoIosPaper className='mx-2' /> Requests</Link>
            </Nav>
            <Nav>
              <Button variant="outline-none" className="nav-link px-5 d-flex align-items-center" onClick = {logout}>
                <FaSignOutAlt className='mx-1' /> Logout
              </Button>
            </Nav>
          </Container>
        </Navbar>
        <div className='d-flex justify-content-center'>
          <InputGroup style={{ width: '25%' }} className='bg-dark px-2 py-2 rounded-bottom '>
            <FormControl placeholder="Search" aria-label="Search" />
            <InputGroup.Text>
              <Button variant="outline-secondary" className="p-0" style={{ border: 'none', background: 'transparent' }}>
                <FaSearch />
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </div>
      </>
    );
  };

export default TopBar;
