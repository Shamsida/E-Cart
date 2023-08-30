import React, { useEffect , useState } from 'react';
import jwtDecode from 'jwt-decode';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillHeart} from 'react-icons/ai';
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from 'react-icons/ri';
// import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { userContext } from '../App';
import { useContext } from 'react';
import './Header.css';
import Announcement from './Announcement';
//import Dropdown from 'react-bootstrap/Dropdown';
import Cookies from 'js-cookie';
import axios from 'axios';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Header() {

  const navigate = useNavigate();
  const add = useContext(userContext);
  const {confirm, setConfirm , adminState ,  userState , user1, setUser1} = add.state;
  //const [username,setUsername] = useState()
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);


  const Logout=()=>{
    Cookies.remove('jwtToken');
    //setUserState('',false);
    setConfirm(false);
    navigate('/');
  }

useEffect(() => {
  const jwtToken = Cookies.get('jwtToken');
  setConfirm(jwtToken!==undefined)
  const decodeToken = jwtDecode(jwtToken);
  console.log(decodeToken,"decToken");
  //setUsername(decodeToken.unique_name);
  

  const fetchData = async () => {
    try {
      //console.log(username,"username");
      //console.log(userState, 'userstate');
      const response = await axios.get(`https://localhost:7152/api/user/GetUsersByUsername?username=${decodeToken.unique_name}`);
      const item = response.data;
      setUser1(item);

    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);

  return (
    <div className='maindiv'>
           {/* {console.log(user1,'...........')} */}
          <Announcement />
         
          <Navbar bg="light" expand="lg">
          <Container fluid className='subdiv'>
            <Navbar.Brand onClick={()=> navigate('/')}><img
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
                { adminState ?<Button  onClick={()=> navigate('/admin')} variant="outline-secondary"><RiAdminLine style={{height:'19px', width:'19px'}}/></Button> :
                <Button  onClick={()=> navigate('/adminlogin')} variant="outline-secondary"><RiAdminLine style={{height:'19px', width:'19px'}}/></Button> }
                <Button onClick={()=> navigate('/wishlist')} className='btn' variant="outline-secondary">
                    <AiFillHeart size="1.5rem"/>
                </Button>
                {confirm? <Button onClick={()=> navigate('/cart')} className='btn' variant="outline-secondary">
                  {/* <Badge badgeContent={4} color="info"> */}
                    <ShoppingCartIcon />
                  {/* </Badge> */}
                </Button> : null}
                {confirm ? <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                              <DropdownToggle caret>
                              {user1 && 
                                  <img
                                    src={`https://localhost:7152/Resources/${user1.imageurl}`}
                                    alt=''
                                    style={{ width: '28px', height: '28px' }}
                                    className='rounded-circle'
                                  />
                              }
                              </DropdownToggle>
                              <DropdownMenu >
                                <DropdownItem>Orders</DropdownItem>
                                <DropdownItem onClick={Logout}>Logout</DropdownItem>
                              </DropdownMenu>
                            </Dropdown> :<Button 
                                    onClick={()=> navigate('/login')} variant="outline-secondary">
                                      <FaUserAlt />
                                    </Button> }
                
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
       
                         
    {confirm ? console.log(userState): console.log('none')}
    </div>
  )
}

export default Header