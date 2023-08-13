import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useContext } from 'react';
import { userContext } from '../App';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Register = () => {

    const user = useContext(userContext);
    const { input, setInput, todos, setTodos }= user.state;
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    
      const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
      };
      //console.log(file);

    useEffect(() => {
        console.log(todos)
      }, [todos]);

       const onInputChange =(event) => {
           const {name , value} = event.target;
            console.log(user.state.input)
           setInput( (prev) => {
              return {...prev, [name] : value };
           });
         };

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(input);
        const formData = new FormData();
        formData.append('Username', user.state.input.username);
        formData.append('Firstname', user.state.input.firstname);
        formData.append('Lastname', user.state.input.lastname);
        formData.append('Email', user.state.input.email);
        formData.append('Password', user.state.input.password);
        formData.append('Imageurl', file);
        formData.append('Number', user.state.input.mobilenumber);
        //const formData = new FormData(event.target);
        try{
            const response = await axios.post('https://localhost:7152/api/user/Signup', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
            console.log(response,"response");
            const resData = response.data
            console.log(resData,"resData");
            setFile('');
            setInput({
                firstname : "",
                lastname : "",
                email : "",
                username : "",
                file : '',
                imgurl : '',
                mobilenumber: '',
                password : ""
              });
            toast.success("Student has been added");
        }catch(error){
            console.log(error);
            console.log(error.response.data);
        }
      };

    return (
       <Container className="">
            <Row className="justify-content-center mt-5">
                <Col style={{width:600}} xs={11} sm={10} md={8} lg={4} className={`p-4 rounded text-black bg-light`}>
                    <h1 className={`text-center border-bottom pb-3 text-light-primary`}>
                        Create Account
                    </h1>
                    <Form onSubmit={handleSubmit} >
                        <Row>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>First name</Form.Label>
                                <Form.Control  
                                    name="firstname" 
                                    type="text" 
                                    value={user.state.input.firstname}
                                     onChange={onInputChange}
                                    placeholder="First name" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control   
                                    name="lastname" 
                                    type="text" 
                                    value={user.state.input.lastname}
                                     onChange={onInputChange}
                                    placeholder="Last name" required />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control  
                                name="email" 
                                type="email" 
                                value={user.state.input.email}
                                 onChange={onInputChange}
                                placeholder="Email" required />
                        </Form.Group>
                        <Row>
                        <Form.Group className="mb-3 col-lg-6">
                            <Form.Label>Username</Form.Label>
                            <Form.Control  
                                name="username" 
                                type="text" 
                                value={user.state.input.username}
                                 onChange={onInputChange}
                                placeholder="Username" 
                                minLength={3} required />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6">
                            <Form.Label>Password</Form.Label>
                            <Form.Control   
                                name="password" 
                                type="password" 
                                value={user.state.input.password}
                                 onChange={onInputChange}
                                placeholder="Password" 
                                minLength={6} required />
                        </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Image </Form.Label>
                            <Form.Control   
                                name="imgurl" 
                                type="file"
                                value={input.file}
                                onChange={handleFileChange}
                                placeholder="No File Chosen" required />
                            {file && (
                                <img src={URL.createObjectURL(file)} alt="Uploaded" style={{ marginTop: '10px', maxWidth: '25%' }} />
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile number</Form.Label>
                            <Form.Control   
                                name="mobilenumber" 
                                type="tel" 
                                value={user.state.input.mobilenumber}
                                 onChange={onInputChange}
                                placeholder="mobilenumber" 
                                maxLength={10} required />
                        </Form.Group>
                        <div style={{display:'flex' , justifyContent:'center'}}>
                        <Button
                            type="submit"
                            className={`bg-light-primary  d-block`}
                            style={{border: 0 }}
                        >Submit
                        </Button>
                        <Button onClick={() => navigate("/login")}
                            type="submit"
                            className={`bg-light-primary  d-block`}
                            style={{border: 0, marginLeft:20}}
                        >Sign In
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
       </Container>
    );
};

export default Register;