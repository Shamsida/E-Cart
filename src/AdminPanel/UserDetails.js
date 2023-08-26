import React , {useState , useEffect} from 'react';
import { Button, Card} from 'react-bootstrap';
import { Input , Form, Label, FormGroup, Col } from 'reactstrap';
import { AiFillHome } from 'react-icons/ai';
import { useParams} from 'react-router-dom';
import { userContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UserDetails() {

  const product = useContext(userContext);
  const { todos, setTodos }= product.state;
  const navigate = useNavigate();
  
  const {userId} = useParams();
  const [user1, setUser1] = useState(todos);

  // useEffect(() =>{ 
  //   const item = todos.filter((todo)=> (todo.id)  == parseInt(userId) );
  //   console.log(item,"item---------------");
  //   setUser1(item);
  // },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(userId, 'userid');
        const response = await axios.get(`https://localhost:7152/api/user/GetUserSById?id=${userId}`);
        const data = response.data;

        // Set the user1 state to the retrieved object directly
        setUser1(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userId]);

  console.log(user1,"user1--------------------")

  return (
    <div style={{marginLeft:250, marginRight:20 }}>
       <div style={{marginTop:50}}>
        <h2 style={{marginLeft:10 , marginBottom:15}} >User Details</h2>
         {user1 && (
        // user1.map((item, index)=>{
        //     return(  */}
          <div className='border p-4'style={{display:'flex' , borderRadius:6 , borderWidth :'10px', height: 450}}>
          <div style={{width:250}}>
          <Card style={{height:230, textAlign:'center'}}> 
            <Card.Img variant="top" src={`https://localhost:7152/Resources/${user1.imageurl}`}
            style={{ marginLeft:65, marginTop:40 , width: '100px', height: '100px' }}
            className='rounded-circle' />
            <Card.Body>
              <Card.Title style={{marginTop:15}}>{user1.firstname}&nbsp;{user1.lastname}</Card.Title>
            </Card.Body>
          </Card>
          </div>
          <div style={{marginLeft:60, width:800}} className='border bg-light p-5'>
          <Form >
            <FormGroup row>
              <Label
                for="id"
                sm={2}
              >
              First Name :
              </Label>
              <Col sm={8} style={{marginLeft:50}}>
                <Input 
                  name="id"
                  disabled
                   value={user1.firstname}
                  // placeholder="Enter id here"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="image"
                sm={2}
              >
              Last Name :
              </Label>
              <Col sm={8} style={{marginLeft:50}}>
                <Input
                  name="image"
                  disabled
                  defaultValue={user1.lastname}
                  // placeholder="Enter image url here"
                  type="text"
                  // onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="title"
                sm={2}
              >
              Username :
              </Label>
              <Col sm={8} style={{marginLeft:50}}>
                <Input
                  name="title"
                  disabled
                  // placeholder="Enter title here"
                  type="text"
                  value={user1.username}
                  // defaultValue={item.title}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label style={{width:150}}
                for="price"
                sm={2}
              >
              Mobile Number :
              </Label>
              <Col sm={8} style={{marginLeft:11}}>
                <Input
                  name="price"
                  disabled
                  // placeholder="Enter title here"
                  type="text"
                  value={user1.number}
                  // defaultValue={item.price}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="type"
                sm={2}
              >
              Email :
              </Label>
              <Col sm={8} style={{marginLeft:50}}>
                <Input
                  name="type"
                  disabled
                  // placeholder="Enter title here"
                  type="text"
                  value={user1.email}
                  // defaultValue={item.type}
                />
              </Col>
            </FormGroup>
            <FormGroup
              check
              row
              >
              <Col
               sm={{
               offset:1,
               size: 10
               }}>
                <div className='d-flex justify-content-center '>
             <Button variant="secondary" onClick={() => navigate("/admin/users")}>
             <AiFillHome />
             </Button>
             </div>
             </Col>
            </FormGroup>
          </Form>
          </div>

        </div>
        )}
        {/* )
      })} */}
        
       </div>
    </div>
    // <div style={{marginLeft:250, marginRight:20}}>
    //    {user1 && 
    //    user1.map((item)=>(
    //                       <p>{item.firstname}</p>
    //                         )
    //              )}
    // </div>
  )
}

export default UserDetails