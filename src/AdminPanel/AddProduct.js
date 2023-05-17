import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Input , Form, Label, FormGroup, Col , Button } from 'reactstrap';
import { userContext } from '../App';
import { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';


function AddProduct() {
    const product = useContext(userContext);
    const { data, setData , productdata , setProductdata }= product.state;
    const navigate = useNavigate();

    const onInputChange =(event) => {
      const {name , value} = event.target;
       console.log(product.state.data)
      setData( (prev) => {
         return {...prev, [name] : value };
      });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        const Id = productdata.length + 1 ;
        setProductdata([...productdata, { id:Id, image:product.state.data.image, title:product.state.data.title,price:product.state.data.price, type:product.state.data.type ,completed:false}]);
        setData({
          id : '',
          image : '',
          title : '',
          price : '',
          type : ''
        });
        console.log(productdata);
      };
      useEffect(()=>{
        console.log(productdata);
        // console.log(data);
      },[productdata])

  return (
    <div style={{marginLeft:200, marginRight:20 , marginTop:50}}>
        <h1 style={{marginLeft:430 , marginBottom:10}}>Add Products</h1>
        <div className='d-flex vh-50 justify-content-center '>
            <div style={{width:800 ,padding:'48px 48px 30px 48px'}} className='border bg-light'>
            <Form onSubmit={onFormSubmit}>
            <FormGroup row>
              <Label
                for="image"
                sm={2}
              >
              Image :
              </Label>
              <Col sm={10}>
                <Input
                  name="image"
                  placeholder="Enter image url here"
                  type="text"
                  onChange={onInputChange}
                //   onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="title"
                sm={2}
              >
              Title :
              </Label>
              <Col sm={10}>
                <Input
                  name="title"
                  placeholder="Enter title here"
                  type="text"
                  onChange={onInputChange}
                //   onChange={(e)=>setProductData({...productdata, Title: product.state.Title})}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="price"
                sm={2}
              >
              Price :
              </Label>
              <Col sm={10}>
                <Input
                  name="price"
                  placeholder="Enter price here"
                  type="text"
                  onChange={onInputChange}
                //   onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="type"
                sm={2}
              >
              Category :
              </Label>
              <Col sm={10}>
                <Input
                  name="type"
                  placeholder="Enter type here"
                  type="text"
                  onChange={onInputChange}
                //   onChange={(e)=>setProductData({...productdata, Type: product.state.Type})}
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
                <div style={{marginTop:'20px'}} className='d-flex justify-content-center '>
             <Button>
               Submit
             </Button>
             <Button  style={{marginLeft : "20px"}} onClick={() => navigate("/admin/products")}>
             <AiFillHome />
             </Button>
             </div>
             </Col>
            </FormGroup>
          </Form>
            </div>
        </div>
        </div>
  )
}

export default AddProduct