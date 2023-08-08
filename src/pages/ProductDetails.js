import React, { useState , useEffect} from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { BsCartPlus } from 'react-icons/bs';
import { useParams} from 'react-router-dom';
// import {categories1} from '../Data';
import { userContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ProductDetails = () => {
    const product = useContext(userContext);
    const { confirm, productdata , user1 }= product.state;
    const [productData1, setProductData1] = useState([]);
    const {productId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://localhost:7152/api/Product/GetProductsById?id=${productId}`);
            const data = response.data;
            console.log(data);
            setProductData1(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [productId]);

      const addItemToCart = async (id) => {
        const prodID = id;
        try {
            const userId = user1.userId;
            const response = await axios.post(`https://localhost:7152/api/Cart/AddToCart?userId=${userId}`, {
              prodID : prodID,
              qty : 1
            });
      
            console.log('Item added to cart:', response.data);
            alert('Item added to cart');
          } catch (error) {
            console.error('Error adding item to cart:', error.response.data);
          }
    }

console.log(productData1);

    return (
      <div>
        {/* {productData1.map((item)=>
        (    */}
        <Container  className="  py-5">
            <div style={{marginTop:50 ,paddingBottom:30}} className='border'>
              <Row className="justify-content-center mt-5">
                  <Col xs={10} md={7} lg={4} className="p-0">
                    <img src={productData1.image} alt='img'/>
                  </Col>
                  <Col xs={10} md={7} lg={7} className={`text-black product-details`}>
                      <h1 style={{fontFamily:'sans-serif'}}>{productData1.title}</h1>
                      <b className="h5">4.1 ⭐</b>
                      <p className="mt-3 h5" style={{opacity: '0.8', fontWeight: '400' , fontFamily:'initial'}}>
                          {productData1.description}
                      </p>
                      <b className={`text-light-primary h4 mt-3 d-block`} style={{fontFamily:'sans-serif' , marginBottom:15}} >
                          Rs. {productData1.price}
                      </b>
                      <Button 
                           onClick={()=>{confirm? addItemToCart(productData1.id): navigate('/login')}}
                          style={{borderRadius: '4px', border: 0 , marginLeft :0 , backgroundColor:'#f47c7c'}}
                      >
                          {/* <BsCartPlus size="1.8rem"/> */}
                          Add to cart
                      </Button>
                  </Col>
              </Row>
              </div>
          </Container>
           {/* ) )} */}
      </div>
    );
};

export default ProductDetails;