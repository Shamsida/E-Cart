import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Input , Form, Label, FormGroup, Col , Button } from 'reactstrap';
import { userContext } from '../App';
import { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import axios from 'axios';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


function AddProduct() {
    const product = useContext(userContext);
    const { data, setData , productdata }= product.state;
    const navigate = useNavigate();
    const token = Cookies.get('jwtToken');

    //const [file, setFile] = useState(null);
    
      // const handleFileChange = (event) => {
      //   const selectedFile = event.target.files[0];
      //   setFile(selectedFile);
      // };

    useEffect(() => {
      setData({
        id : '',
        image : '',
        title : '',
        price : '',
        categoryname : '',
        description : ''
      });
      console.log(productdata)
    }, [productdata]);

    const onInputChange =(event) => {
      const {name , value} = event.target;
       console.log(product.state.data)
      setData( (prev) => {
         return {...prev, [name] : value };
      });
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        console.log(data);
        console.log(productdata);
        // const formData = new FormData();
        // formData.append('Image', file);
        // formData.append('Title', product.state.data.title);
        // formData.append('Price', product.state.data.price);
        // formData.append('CategoryName', product.state.data.categoryname);
        // formData.append('Description', product.state.data.description);
        const formData = new FormData(event.target);
        try{
          const response = await axios.post('https://localhost:7152/api/Product/PostItems', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        });
          console.log(response,"response");
          const resData = response.data
          console.log(resData,"resData");
          setData({
              id : '',
              image : '',
              title : '',
              price : '',
              categoryname : '',
              description : ''
          });
            toast.success("Product Added Successfully");
        }catch(error){
          console.log(error);
          console.log(error.response.data);
        }
      };

      useEffect(()=>{
        console.log(productdata);
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
                  placeholder="No File Chosen"
                  type="file"
                  value={product.state.data.image}
                 // onChange={handleFileChange}
                   onChange={onInputChange}
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
                  value={product.state.data.title}
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
                  value={product.state.data.price}
                  onChange={onInputChange}
                //   onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="categoryname"
                sm={2}
              >
              Category :
              </Label>
              <Col sm={10}>
                <Input
                  name="categoryname"
                  placeholder="Enter categoryname here"
                  type="text"
                  value={product.state.data.categoryname}
                  onChange={onInputChange}
                //   onChange={(e)=>setProductData({...productdata, Type: product.state.Type})}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="description"
                sm={2}
              >
              Description :
              </Label>
              <Col sm={10}>
                <Input
                  name="description"
                  placeholder="Enter Description here"
                  type="textarea"
                  value={product.state.data.description}
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