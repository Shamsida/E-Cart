import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Input , Form, Label, FormGroup, Col , Button } from 'reactstrap';
import { userContext } from '../App';
import { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import axios from 'axios';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddProduct() {
    const product = useContext(userContext);
    const { data, setData , productdata , setProductdata }= product.state;
    const navigate = useNavigate();

    useEffect(() => {
      setData({
        id : '',
        image : '',
        title : '',
        price : '',
        categoryName : '',
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
        const form = event.currentTarget;
        event.preventDefault();
        console.log(data);
        const Id = productdata.length + 1 ;
        setProductdata([...productdata, { id:Id, image:product.state.data.image, title:product.state.data.title,price:product.state.data.price, categoryname:product.state.data.categoryname, description:product.state.data.description, completed:false}]);
        console.log(productdata);
        const image = product.state.data.image;
        const title = product.state.data.title;
        const price = product.state.data.price;
        const categoryname = product.state.data.categoryname;
        const description = product.state.data.description;
        console.log(image,title,price,categoryname,description);
        try{
          const response=await axios.post('https://localhost:7152/api/Product/PostItems',{
            image,
            title,
            price,
            categoryName :  categoryname,
            description
        });
        console.log(response,"response");
            const resData = response.data
            console.log(resData,"resData");
            setData({
              id : '',
              image : '',
              title : '',
              price : '',
              categoryName : '',
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
                  placeholder="Enter image url here"
                  type="text"
                  value={product.state.data.image}
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