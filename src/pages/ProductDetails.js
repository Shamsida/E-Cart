import React, { useState , useEffect} from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { useParams} from 'react-router-dom';
// import {categories1} from '../Data';
import { userContext } from '../App';
import { useContext } from 'react';


const ProductDetails = () => {
    const product = useContext(userContext);
    const { productdata }= product.state;
    const [productData1, setProductData1] = useState([]);
    const {userId} = useParams();
    const { addItem } = useCart();

     useEffect(() =>{ 
       const item = productdata.filter((todo)=> (todo.id)  == parseInt(userId) );
       setProductData1( item );
     },[]);

console.log(productData1);

    return (
      <div>
        {productData1.map((item)=>
        (   <Container className="py-5">
              <Row className="justify-content-center mt-5">
                  <Col xs={10} md={7} lg={5} className="p-0">
                    <img src={item.image} alt='img'/>
                  </Col>
                  <Col xs={10} md={7} lg={7} className={`text-black product-details`}>
                      <h1>{item.title}</h1>
                      <Button 
                          onClick={()=>addItem(item)}
                          className={'bg-light-primary'}
                          style={{borderRadius: '0', border: 0}}
                      >
                          <BsCartPlus size="1.8rem"/>
                          Add to cart
                      </Button>
                      <br/>
                      <b className={`text-light-primary h4 mt-3 d-block`}>
                          Rs. {item.price}
                      </b>
                      <br/>
                      <b className="h5">4.1 ⭐</b>
                      <p className="mt-3 h5" style={{opacity: '0.8', fontWeight: '400'}}>
                          {item.description}
                      </p>
                  </Col>
              </Row>
          </Container>
       ) )}
      </div>
    );
};

export default ProductDetails;