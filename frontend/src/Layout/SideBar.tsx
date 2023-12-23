import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { FaBars, FaHome, FaSearch, FaServer, FaSignOutAlt } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { BsBoxes } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';


const SideBar: React.FC<{ toggled: boolean }> = ({ toggled }) => {
  return (
    <Nav className={`align-items-center d-flex bg-dark sidebar ${toggled && 'open'}`}>
      <Col>
        <Row className='py-3'>
          <Link to="/home" className='nav-link d-flex justify-content-center align-items-center' >
            <FaHome className='mx-2' /> Home
          </Link>
        </Row>
        <Row>
          <Link to="/home" className='nav-link d-flex justify-content-center align-items-center' >
            <FaHome className='mx-2' /> Home
          </Link>
        </Row>
        <Row>
          <Link to="/home" className='nav-link d-flex justify-content-center align-items-center' >
            <FaHome className='mx-2' /> Home
          </Link>
        </Row>
        <Row>
          <Link to="/home" className='nav-link d-flex justify-content-center align-items-center' >
            <FaHome className='mx-2' /> Home
          </Link>
        </Row>
      </Col>
    </Nav>
  );
};

export default SideBar;
