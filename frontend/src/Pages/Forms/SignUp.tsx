import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import User, { newUser } from '../../Models/User';

const SignUp: React.FC<{ user: User | undefined, setUser : Function}>
  = ({ user, setUser}) => {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [PW, setPW] = useState("");
    const [signUpError, setSignUpError] = useState("")

    useEffect(() => {
      if (user) navigate('/home')
    }, [user, navigate])

    function clickSignUp(e: any) {
      e.preventDefault()

      newUser({ name: name, email: email, password: PW })
        .then((u: User) => { 
          localStorage.setItem('user', JSON.stringify(u))
          setUser(u) })
        .catch((e) => setSignUpError(e.message))
    }

    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row>
          <Col>
            <Form>
              <h2 className="text-center mb-4">Sign Up</h2>

              <Form.Group controlId="formName" className='py-2'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className='py-2' >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formPassword" className='py-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={e => setPW(e.target.value)} placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3" onClick={clickSignUp}>
                Sign Up
              </Button>

              <div className="w-100 text-center mt-3">
                Already have an account? <Link to="/login">Log In</Link>
              </div>
              {signUpError && <Form.Text className='text-danger'>{signUpError}</Form.Text>}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };

export default SignUp;
