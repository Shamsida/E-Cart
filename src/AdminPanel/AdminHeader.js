import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import Button from 'react-bootstrap/Button';
import './AdminHeader.css';
import { IconContext } from 'react-icons';
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { userContext } from '../App'; 
import { useContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function AdminHeader() {

  // const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const add = useContext(userContext);
  const {setAdminState , admin, setAdmin } = add.state;

  const Logout=()=>{
    setAdminState(false);
    navigate('/adminlogin');
    Cookies.remove('jwtToken');
  }

  useEffect(() => {
    const jwtToken = Cookies.get('jwtToken');
    if(jwtToken){
    const decodeToken = jwtDecode(jwtToken);
    console.log(decodeToken,"decToken");
    if(decodeToken.role=='admin'){
    setAdminState(true);
    
  
    const fetchData = async () => {
      try {
        //console.log(username,"username");
        //console.log(userState, 'userstate');
        const response = await axios.get(`https://localhost:7152/api/user/GetUsersByUsername?username=${decodeToken.unique_name}`);
        const item = response.data;
        setAdmin(item);
  
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    
  }
  }
  else{
    setAdminState(false)
  }
  }, []);

  console.log(admin,'..admin')

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  />
          </Link>
          <Button onClick={Logout} style={{marginRight:10}} variant="outline-secondary">
                          {admin && 
                          <div style={{display:'flex' , justifyContent:'space-between', width:'47px'}}>
                                  <img
                                    src={`https://localhost:7152/Resources/${admin.imageurl}`}
                                    alt=''
                                    style={{ width: '26px', height: '26px' }}
                                    className='rounded-circle'
                                  />
                              <FiLogOut style={{marginTop:'4px'}} /></div>}
                      </Button>
        </div>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              {/* <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link> */}
            </li>
            {AdminSidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminHeader;