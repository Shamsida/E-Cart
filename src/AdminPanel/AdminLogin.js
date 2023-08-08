import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup} from 'react-bootstrap';
import { useContext } from 'react';
import { userContext } from '../App';
import { useNavigate } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import axios from 'axios';

//icons 
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';

const AdminLogin = () => {

    const user = useContext(userContext);
    const { adminlog , setAdminState }= user.state;
    const navigate = useNavigate();

    const handleSubmit = async (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        console.log(username,password);

        try {
            const response = await axios.post('https://localhost:7152/api/admin/Login', {
              username,
              password,
            });
            setAdminState(true);
            alert('success');
            navigate('/admin');
            console.log('Login successful!', response.data);
          } catch (error) {
            console.error('Login failed:', error.response.data);
          }
        }
    
    return (
      <div style={{marginTop:'3rem'}}>
       <Container className="py-5 mt-3">
            <Row className="justify-content-center mt-5" style={{height:'23rem'}}>
                <Col xs={11} sm={10} md={8} lg={7} className={`p-4 rounded text-black bg-light`}>
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
                        <InputGroup className="mb-5 ">
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
                        <Button onClick={() => navigate("/")}
                            type="submit"
                            className={`bg-secondary text-black`}
                            style={{border: 0 , marginLeft : "20px"}}
                        > <AiFillHome />
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
       </Container>
       </div>
    );
};

export default AdminLogin;