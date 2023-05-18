import React,{ useEffect} from 'react';
import { Container, Row, Col, Button, Form} from 'react-bootstrap';
import { useContext } from 'react';
import { userContext } from '../App';
import { useNavigate } from "react-router-dom";

const Register = () => {

    const user = useContext(userContext);
    const { input, setInput, todos, setTodos }= user.state;
    const navigate = useNavigate();

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

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        setTodos([...todos, { id:Date.now(),firstname:user.state.input.firstname, lastname:user.state.input.lastname, email:user.state.input.email, username:user.state.input.username, password:user.state.input.password , mobilenumber:user.state.input.mobilenumber, imgurl:user.state.input.imgurl, completed:false}]);
        setInput({
                firstname : "",
                lastname : "",
                email : "",
                username : "",
                mobilenumber: '',
                imgurl : '',
                password : ""
              });
        console.log(todos);
      };

    //   const handleSubmit = (event)=>{
    //        const form = event.currentTarget;
    //        event.preventDefault();
    //     //    setTodos([...todos, { firstname:user.state.input.firstname, lastname:user.state.input.lastname, email:user.state.input.email, completed:false}]);
    //     //    console.log(todos);
    //        const username = form.username.value;
    //        const password = form.password.value;
    //        const firstname = form.firstName.value;
    //        const lastname = form.lastName.value;
    //        const email = form.email.value;
    //        const mobilenumber = form.mobilenumber.value;
        
    //        if(username && password && firstname && lastname && email && mobilenumber){
    //     //       //console.log('call api here');
    //     //       //console.log(username, password, firstname, lastname, email,mobilenumber);
    //   }

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
                                    //  value={input.firstname}
                                     onChange={onInputChange}
                                    placeholder="First name" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control   
                                    name="lastname" 
                                    type="text" 
                                    // value={input.lastname}
                                     onChange={onInputChange}
                                    placeholder="Last name" required />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control  
                                name="email" 
                                type="email" 
                                // value={input.email}
                                 onChange={onInputChange}
                                placeholder="Email" required />
                        </Form.Group>
                        <Row>
                        <Form.Group className="mb-3 col-lg-6">
                            <Form.Label>Username</Form.Label>
                            <Form.Control  
                                name="username" 
                                ype="text" 
                                // value={input.username}
                                 onChange={onInputChange}
                                placeholder="Username" 
                                minLength={3} required />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6">
                            <Form.Label>Password</Form.Label>
                            <Form.Control   
                                name="password" 
                                type="password" 
                                // value={input.password}
                                 onChange={onInputChange}
                                placeholder="Password" 
                                minLength={6} required />
                        </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Image </Form.Label>
                            <Form.Control   
                                name="imageurl" 
                                type="text" 
                                // value={input.mobilenumber}
                                 onChange={onInputChange}
                                placeholder="imgurl" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile number</Form.Label>
                            <Form.Control   
                                name="mobilenumber" 
                                type="tel" 
                                // value={input.mobilenumber}
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