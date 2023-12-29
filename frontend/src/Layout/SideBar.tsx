import React, { MouseEventHandler } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { FaBook, FaSignOutAlt } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { FaUserGear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdAdminPanelSettings } from "react-icons/md";
import UserProfile from '../Models/Helpers/UserProfile';



const SideBar: React.FC<{ toggled: boolean, userProfile: UserProfile, logout: MouseEventHandler }>
  = ({ toggled, userProfile, logout }) => {
    return (
      <Nav className={`align-items-center d-flex bg-dark sidebar ${toggled && 'open'}`} variant='dark'>

        <Col>

          <Row className='py-5'>
            <h1 className='text-light d-flex justify-content-center align-items-center'> {userProfile.user.name} </h1>
            <h5 className='text-secondary d-flex justify-content-center align-items-center'> {userProfile.user.email} </h5>
          </Row>

          <Row className='py-3 separator-with-text text-success'> Namespaces </Row>

          <Row className='py-2'>
            <Link to="/home" className='nav-link d-flex justify-content-center align-items-center text-light' >
              <IoIosAddCircle className='mx-2' /> New Request
            </Link>
          </Row>
          <Row className='py-2'>
            <Link to="/home" className='nav-link d-flex justify-content-center align-items-center text-light' >
              <FaBook className='mx-2' /> Request History
            </Link>
          </Row>
          <Row className='py-2'>
            <Link to="/home" className='nav-link d-flex justify-content-center align-items-center text-light' >
              <MdAdminPanelSettings className='mx-2' /> Admin Portal
            </Link>
          </Row>

          <Row className='py-3 separator-with-text text-success'> Options </Row>

          <Row className='py-2'>
            <Link to="/home" className='nav-link d-flex justify-content-center align-items-center text-light' >
              <FaUserGear className='mx-2' /> Settings
            </Link>
          </Row>
          <Row className='py-2'>
            <Link to="/login" className='nav-link d-flex justify-content-center align-items-center text-light' onClick={logout} >
              <FaSignOutAlt className='mx-2' /> Logout
            </Link>
          </Row>
        </Col>
      </Nav>
    );
  };

export default SideBar;
