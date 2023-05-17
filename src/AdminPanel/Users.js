import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { userContext } from '../App';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function Users() {
  const user = useContext(userContext);
  const { todos, setTodos }= user.state;
  const[searchInput , setSearchinput] = useState('');
  const [todos1 , setTodos1] = useState(todos);

  const handleSearch = (query) => {
    const newList = todos.filter(x => {
      const firstname = x.firstname.toLowerCase();
      const lastname = x.lastname.toLowerCase();
      const lowerCase = query.toLowerCase();
  
      return firstname.includes(lowerCase) || lastname.includes(lowerCase);
    });
    setTodos1(newList);
  };

  return (
    <div style={{marginLeft:300}}>
      {console.log(todos)}
      <div style={{marginTop:50}}>
      <div style={{display:'flex',justifyContent:"space-between", alignItems:'center'}}>
        <h1 style={{marginLeft:12}} >Users</h1>
        <Form className="d-flex" style={{marginRight:140}}>
          <Form.Control
            type="search"
            placeholder="Search"
            value={searchInput}
            aria-label="Search"
            onChange={(e)=>{setSearchinput(e.target.value)
              handleSearch(e.target.value);
            }}/>
        </Form>
        </div>
        <Table style={{width:900 , marginLeft:10, marginTop:20}} responsive="sm" striped bordered hover variant={'light'} className="mb-5">
      <thead>
        <tr style={{textAlign:'center', height:50}}>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {todos1.map((item, index)=>{
      return(
        <tr key={index}>
          <td style={{paddingTop :45, paddingLeft:20}} >
          <div className='d-flex align-items-center'>
              <img
                src={item.imgurl}
                alt=''
                style={{ width: '60px', height: '60px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{item.firstname}&nbsp;{item.lastname}</p>
                <p className='text-muted mb-0'>{item.email}</p>
              </div>
            </div>
          </td>
          <td style={{display: 'flex',justifyContent: 'center', height: '9rem' , paddingTop : 50}} >
                                      <Link  to={`/admin/userDetails/${item.id}`} 
                                      className='btn btn-outline-primary p-2'
                                      style={{height: '33px' , display: 'flex' , justifycontent: 'center'}}>
                                        <FaEye/></Link>
                                    </td>
        </tr>
         )
        })}
      </tbody>
    </Table>
        </div>
        </div>
  )
}

export default Users