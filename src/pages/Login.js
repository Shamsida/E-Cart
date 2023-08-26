import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup} from 'react-bootstrap';
import { Link} from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../App';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';
import Cookies from 'js-cookie';
import axios from 'axios';

const Login = () => {

    const user = useContext(userContext);
    const { todos , setConfirm , setUserState }= user.state;
    const navigate = useNavigate();

    const handleSubmit = async (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        console.log(username,password);
        try {
            const response = await axios.post('https://localhost:7152/api/user/Login', {
              username,
              password,
            });
            const data = response.data;
            alert('success');
            setConfirm(true);
            setUserState(username ,true);
            console.log(data.token);
            Cookies.set('jwtToken',data.token);
            console.log('Login successful!', response.data);
            navigate('/')
          } catch (error) {
            console.error('Login failed:', error.response.data);
          }
     }
    
    return (
       <Container className="py-3 mt-3">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={8} className={`p-4 rounded text-black bg-light`}>
                    <h1 className={`text-center border-bottom pb-3 text-dark-primary`}>
                        Sign in
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-4 mt-5">
                            <InputGroup.Text>
                                <AiOutlineUser size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="username" type="text" placeholder="Username" minLength={3} required />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Text>
                                <VscKey size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="password" type="password" placeholder="Password" minLength={6} required />
                        </InputGroup>
                        <div style={{textAlign:'center'}}>
                        <Button
                            type="submit"
                            className={`bg-secondary text-black`}
                            style={{border: 0}}
                        >Sign in
                        </Button>
                        </div>
                        <Form.Group className="mt-3 text-center">
                            <Form.Text className="text-muted fw-bold">
                                New to E-cart?
                            </Form.Text>
                            <Row className="py-2 border-bottom mb-3"/>
                            <Link to='/register' className="btn btn-info rounded-0">
                                Create your E-cart account 
                            </Link>
                            <Link to='/' className="btn btn-info rounded-0">
                            <AiFillHome />
                            </Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
       </Container>
    );
};

export default Login;