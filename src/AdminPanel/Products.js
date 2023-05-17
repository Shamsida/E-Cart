import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import { categories1 } from '../Data';
import { useNavigate } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { userContext } from '../App';
import { useContext } from 'react';
import { useState } from 'react';


function Products() {
  const navigate = useNavigate();
  const product = useContext(userContext);
    const { productdata , setProductdata }= product.state;
    const[searchInput , setSearchinput] = useState('');
    const [productData1, setProductData1] = useState(productdata);

    const DeletHandle= (id)=>{
      const item = productdata.filter((item)=>  item.id !== id);
      setProductData1(item);
      setProductdata(item);
  }
console.log(productdata)
  const handleSearch = (query) => {
    const newList = productdata.filter(x => {
      const title = x.title.toLowerCase();
      const type = x.type.toLowerCase();
      const lowerCase = query.toLowerCase();
  
      return title.includes(lowerCase) || type.includes(lowerCase);
    });
    setProductData1(newList);
  };

  return (
    <div style={{marginLeft:250, marginRight:20}}>
       <div style={{marginTop:50}}>
        <div style={{display:'flex',justifyContent:"space-between", alignItems:'center'}}>
        <h1 style={{marginLeft:10}}>Products</h1>
        {/* <div style={{display:'flex' , justifyContent:"flex-end", height:40, marginRight:20}}> */}
        <Form className="d-flex" style={{marginRight:15}}>
          <Form.Control
            type="search"
            placeholder="Search"
            value={searchInput}
            aria-label="Search"
            onChange={(e)=>{setSearchinput(e.target.value)
              handleSearch(e.target.value);
            }}
          />
          <Button onClick={()=> navigate('/admin/addproducts')} variant="outline-secondary">Add</Button>
        </Form>
        {/* <input type='text' 
              placeholder="Search"
              aria-label="Search"/>
        <Button  variant="outline-secondary">Add</Button> */}
        {/* </div> */}
        </div>
        
        <Container className="py-2 mt-2">
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={'light'} className="mb-5">
                <thead>
                  <tr style={{textAlign:'center'}} >
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                    <tbody style={{textAlign:'center'}}>
                        {productData1.map((item, index)=>{
                            console.log(item.quantity);
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div>
                                                <img src={item.image} style={{ width: '6rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverFlow: 'ellipsis', margin:0 , paddingTop:50}}>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td style={{paddingTop :50}}>Rs. {item.price}</td>
                                    {/* <td>up/del</td> */}
                                    <td style={{display: 'flex',justifyContent: 'center', height: '9rem', paddingTop:50}} >
                                      <Link onClick={()=>DeletHandle(item.id)}
                                      className='btn btn-outline-danger p-2' 
                                      style={{height: '33px' , display: 'flex' , justifycontent: 'center'}}>
                                        <BsFillTrashFill /></Link>
                                      <Link to={`/admin/editproducts/${item.id}`} 
                                      className='btn btn-outline-primary p-2'
                                      style={{height: '33px' , display: 'flex' , justifycontent: 'center'}}>
                                        <BsFillPencilFill/></Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Container>
        <div style={{marginLeft:800, display:'flex'}}>
        </div>
        </div>
        </div>
  )
}

export default Products