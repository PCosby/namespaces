import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="text-white text-center bg-dark nav-link-text fixed-bottom py-3">
      <Container>
        <Row>
          <Col> FirstName LastName </Col>
          <Col> © 2023 | Lethal Company </Col>
          <Col> Contact Us: xxx-xxx-xxxx </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
