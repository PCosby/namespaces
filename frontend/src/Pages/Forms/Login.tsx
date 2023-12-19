import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import User, { login } from '../../Models/User';


const Login
  = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [PW, setPW] = useState("");
    const [loginError, setLoginError] = useState("")

    function clickLogIn(e: any) {
      e.preventDefault()

      login(email, PW)
        .then((u : User) => {console.log(u); navigate('/home')})
        .catch((e) => setLoginError(e.message))

    }
    
    return (
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col>
            <Form>
              <h1 className="text-center mb-4">Login</h1>

              <Form.Group controlId="formEmail" className='py-2' >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={e=>setEmail(e.target.value)} placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formPassword" className='py-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={e=>setPW(e.target.value)} placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3" onClick={clickLogIn}>
                Login
              </Button>

              <div className="w-100 text-center mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </div>
              {loginError && <Form.Text className='text-danger'>{loginError}</Form.Text>}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };

export default Login;