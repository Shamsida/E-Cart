import React, { useEffect , useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Input , Form, Label, FormGroup, Col , Button } from 'reactstrap';
import { userContext } from '../App';
import { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditProduct() {
    const product = useContext(userContext);
    const { data, setData , productdata , setProductdata }= product.state;
    const navigate = useNavigate();

    const {productId} = useParams();
    const [productData1, setProductData1] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log(productId, 'productid');
          const response = await axios.get(`https://localhost:7152/api/Product/GetProductsById?id=${productId}`);
          const data = response.data;
          setData(data);
          setProductData1(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [productId]);
  
    console.log(productData1,"product1--------------------")
  

    const onInputChange = (event) => {
      const {name , value} = event.target;
      setData( (prev) => {
         return { ...prev, [name] : value };
      });
      console.log(product.state.data)
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        console.log(data,"this");
        try{
          const response = await axios.put(`https://localhost:7152/api/Product/PutItems?Id=${product.state.data.id}`,{
            "id" : product.state.data.id,  
            "image" : product.state.data.image,
            "title" : product.state.data.title,
            "price" : product.state.data.price,
            "categoryName" : product.state.data.categoryname
          },);
          const resData = response.data
          console.log(resData);
          toast.success("Product data has been updated");
          setProductdata(response.data);
        }catch(error){
          console.log(error.response.data);
        }
      };

      const Goback = () =>{
        setData({
          id : '',
          image : '',
          title : '',
          price : '',
          categoryName : '',
          description : ''
        });
        navigate("/admin/products")
      }

  return (
    <div style={{marginLeft:250, marginRight:20 , marginTop:60}}>
      {  console.log(productData1)}
        <h1 style={{marginLeft:'22rem' , marginBottom:'1rem'}}>Edit Product Details</h1>
        <div className='d-flex vh-50 justify-content-center '>
            <div style={{width:800}} className='border bg-light p-5'>
            <Form onSubmit={onFormSubmit} >
            <FormGroup row>
              <Label
                for="id"
                sm={2}
              >
              Id :
              </Label>
              <Col sm={10}>
                <Input
                  name="id"
                  disabled
                  value={productData1.id}
                  placeholder="Enter id here"
                  type="text"
                //   onChange={onInputChange}
                //    onChange={(e)=>setProductData({...productdata, id: product.state.id})}
                />
              </Col>
            </FormGroup>
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
                  defaultValue={product.state.data.image}
                  placeholder="Enter image url here"
                  type="text"
                  // onChange={(e)=>setData({...data, image : e.target.image })}
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
                  defaultValue={product.state.data.title}
                  onChange={onInputChange}
                  // onChange={(e)=>setData({...data, title : e.target.title })}
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
                  placeholder="Enter title here"
                  type="text"
                  defaultValue={product.state.data.price}
                  // onChange={(e)=>setData({...data, price : e.target.value })}
                  onChange={onInputChange}
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
                  placeholder="Enter title here"
                  type="text"
                  defaultValue={product.state.data.category?.categoryName || ''}
                  onChange={onInputChange}
                  // onChange={(e)=>setData({...data, category : e.target.category })}
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
                <div className='d-flex justify-content-center '>
             <Button>
               Submit
             </Button>
             <Button  style={{marginLeft : "20px"}} onClick={()=>Goback()}>
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

export default EditProduct