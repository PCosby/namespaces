import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, FormControl, Button, InputGroup } from 'react-bootstrap';
import { FaBars, FaHome, FaSearch, FaServer, FaSignOutAlt } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { BsBoxes } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import UserProfile, { resetUser } from '../Models/Helpers/UserProfile';


const TopBar: React.FC<{ profile: UserProfile }>
  = ({ profile }) => {

    const [toggled, setToggled] = useState(false);
    const [searchText, setSearchText] = useState('');


    const navigate = useNavigate()
    const logout = () => {
      resetUser()
      profile.resetProfile()
      navigate('/login')
    }
    const search = (e : any) => {
      profile.setSearch(searchText)
    }

    return (
      <>
        <SideBar toggled={toggled} profile={profile} logout={logout} />
        <Navbar bg="dark" variant="dark" expand="lg" className='nav-link-text'>
          <Container fluid >
            <Navbar.Brand as={Link} to="/home" className='d-flex align-items-center text-light' onClick={() => setToggled(!toggled)}><FaBars /></Navbar.Brand>
            <Nav className="justify-content-center flex-grow-1">
              <Link to="/home" className="nav-link px-5 d-flex align-items-center text-light"><FaHome className='mx-2' /> Home</Link>
              <Link to="/namespaces" className="nav-link px-5 d-flex align-items-center text-light"><BsBoxes className='mx-2' /> NameSpaces</Link>
              <Link to="/servers" className="nav-link px-5 d-flex align-items-center text-light"><FaServer className='mx-2' /> Servers</Link>
              <Link to="/requests" className="nav-link px-5 d-flex align-items-center text-light"><IoIosPaper className='mx-2' /> Requests</Link>
            </Nav>
            <Nav>
              <Button variant="outline-none" className="nav-link d-flex align-items-center text-light" onClick={logout}>
                <FaSignOutAlt className='mx-1' /> Logout
              </Button>
            </Nav>
          </Container>
        </Navbar>
        <div className='d-flex justify-content-center'>
          <InputGroup style={{ width: '25%' }} className='bg-dark px-2 py-2 rounded-bottom '>
            <FormControl placeholder="Search" aria-label="Search"
              value={searchText} onChange={e => setSearchText(e.target.value)} />
            <InputGroup.Text>
              <Button variant="outline-secondary" className="p-0" onClick={search}
                style={{ border: 'none', background: 'transparent' }} >
                <FaSearch />
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </div>

      </>
    );
  };

export default TopBar;
