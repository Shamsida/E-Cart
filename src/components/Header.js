import React, { useEffect , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from 'react-icons/ri';
// import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import { useCart } from 'react-use-cart';
import { useNavigate } from "react-router-dom";
import { userContext } from '../App';
import { useContext } from 'react';
import './Header.css';
import Announcement from './Announcement';

function Header() {

  const navigate = useNavigate();
  const add = useContext(userContext);
  const {confirm, setConfirm , adminState ,  userState , todos} = add.state;
  const [user1, setUser1] = useState([0]);


  const Logout=()=>{
    setConfirm(false);
    navigate('/');
  }


useEffect(()=>{
  const item = todos.filter((todo)=> (todo.username)  === userState );
    console.log(item,"item---------------");
    setUser1(item);
},[])
  //const {
   // isEmpty,
   // totalItems,
 // } = useCart();

  //console.log( totalItems);

  return (
    <div className='maindiv'>
           {console.log(user1.imgurl,'...........')}
          <Announcement />
         
          <Navbar bg="light" expand="lg">
          <Container fluid className='subdiv'>
            <Navbar.Brand href="/"><img
            src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg"
            width="120"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='menu' onClick={()=> navigate('/')}>Home</Nav.Link>
                <Nav.Link className='menu' onClick={()=> navigate('/toys')}>Toys</Nav.Link>
                <Nav.Link className='menu' onClick={()=> navigate('/dress')}>Dress</Nav.Link>
                <Nav.Link className='menu' onClick={()=> navigate('/babycare')}>Babycare</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {confirm? <Button style={{width:70}} onClick={Logout} variant="outline-secondary">
                {user1 && 
                  user1.map((item)=>(
                  <div style={{display:'flex' , justifyContent:'space-between', width:'47px'}}>
                <img
                      src={item.imgurl}
                      alt=''
                      style={{ width: '28px', height: '28px' }}
                      className='rounded-circle'
                    />
                  <FiLogOut  style={{marginTop:'4px'}}/>
                 </div>
                  )
                  )}
                </Button> :<Button onClick={()=> navigate('/login')} variant="outline-secondary"><FaUserAlt /></Button>}
                {confirm? <Button onClick={()=> navigate('/cart')} className='btn' variant="outline-secondary">
                  {/* <Badge badgeContent={4} color="info"> */}
                    <ShoppingCartIcon />
                  {/* </Badge> */}
                </Button> : null}
                { adminState ?<Button  onClick={()=> navigate('/admin')} variant="outline-secondary"><RiAdminLine style={{height:'19px', width:'19px'}}/></Button> :
                <Button  onClick={()=> navigate('/adminlogin')} variant="outline-secondary"><RiAdminLine style={{height:'19px', width:'19px'}}/></Button> }
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
       
                         
    {confirm ? console.log(userState): console.log('none')}
    </div>
  )
}

export default Header