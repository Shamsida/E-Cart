import React from 'react';
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

function AdminHeader() {

  // const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const add = useContext(userContext);
  const {setAdminState } = add.state;

  const Logout=()=>{
    setAdminState(false);
    navigate('/adminlogin');
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  />
          </Link>
          <Button onClick={Logout} style={{marginRight:20}} variant="outline-secondary"><FiLogOut /></Button>
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