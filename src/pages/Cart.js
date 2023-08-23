import React, { useEffect , useState } from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
import { useContext } from 'react';
import { userContext } from '../App';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Cart = () => {
    const user = useContext(userContext);
    const { user1 , userCart, setuserCart }= user.state;
    //const [userCart, setuserCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
      }, [user1]);

        const fetchData = async () => {
          try {
            console.log(user1.userId);
            const userId = user1.userId;
            const response = await axios.get(`https://localhost:7152/api/Cart/GetCart?userId=${userId}`);
            const item = response.data;
             setuserCart(item);
             console.log(userCart.length,'length');
            } 
            catch (error) {
            console.error(error);
            }
        }

      console.log(userCart);

      const removeItem = async (id) => {
        try {
            await axios.delete(`https://localhost:7152/api/Cart/DeleteCartItems?userId=${user1.userId}&prodID=${id}`)
            .then((result)=>{
              if(result.status ===200){
                console.log("Item Removed successfully!");
                fetchData();
              }
            })
          } catch (error) {
            console.error(error);
          }
        }

        const DecreaseItemQuantity = async(id) => {
            try {
                await axios.put(`https://localhost:7152/api/Cart/DecreaseQuantity?userId=${user1.userId}&ProdID=${id}`)
                .then((result)=>{
                  if(result.status ===200){
                    console.log("Item quantity decreased..!");
                    fetchData();
                  }
                })
              } catch (error) {
                console.error(error);
            }
            fetchData();
        }

        const IncreaseItemQuantity = async (id) => {
            try {
                await axios.put(`https://localhost:7152/api/Cart/IncreaseQuantity?userId=${user1.userId}&ProdID=${id}`)
                .then((result)=>{
                  if(result.status ===200){
                    console.log("Item quantity increased..!");
                    fetchData();
                  }
                })
              } catch (error) {
                console.error(error);
            }
            fetchData();
        }

        const checkOut = async () => {
            try {
                await axios.delete(`https://localhost:7152/api/Cart/Checkout?userId=${user1.userId}`)
                .then((result)=>{
                  if(result.status ===200){
                    console.log("Items checkout Successfully..!");
                    fetchData();
                  }
                })
              } catch (error) {
                console.error(error);
            }
        }
 
    return (
        <Container className="py-2 mt-2">
            <h1 className={`text-dark my-5 text-center`}>
            {userCart.length === 0 ? 'Your Cart is Empty' : 'The Cart'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={'light'} className="mb-5">
                    <tbody>
                            {userCart.map(cartItem => (
                                <React.Fragment key={cartItem.cartId}>
                                <tr rowSpan={cartItem.cartDetails.length}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: ''}}>
                                                <img src={cartItem.cartDetails[0]?.product?.image || ''} style={{ width: '6rem'}} alt={cartItem.cartDetails[0]?.product?.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {cartItem.cartDetails[0]?.product?.title}
                                        </h6>
                                    </td>
                                    <td>Rs.  {cartItem.cartDetails[0]?.total}</td>
                                    <td>Quantity ({cartItem.cartDetails[0]?.quantity})</td>
                                    <td>
                                        <Button 
                                            onClick={()=> DecreaseItemQuantity(cartItem.cartDetails[0]?.product?.id)} 
                                        className="ms-2">-</Button>
                                        <Button 
                                             onClick={()=> IncreaseItemQuantity(cartItem.cartDetails[0]?.product?.id)} 
                                        className="ms-2">+</Button>
                                        <Button variant="danger" 
                                            onClick={()=> removeItem(cartItem.cartDetails[0]?.product?.id)}  
                                        className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                                {cartItem.cartDetails.slice(1).map((detail, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                                justifyContent: 'center', alignItems: 'center' }}>
                                                <div style={{ padding: ''}}>
                                                    <img src={detail.product?.image || ''} style={{ width: '6rem'}} alt={detail.product?.title} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                        {detail.product?.title}
                                        </h6>
                                    </td>
                                    <td>Rs.  {detail.total} </td>
                                    <td>Quantity ({detail.quantity})</td>
                                    <td>
                                        <Button 
                                            onClick={()=> DecreaseItemQuantity(detail.product?.id)} 
                                        className="ms-2">-</Button>
                                        <Button 
                                             onClick={()=> IncreaseItemQuantity(detail.product?.id)} 
                                        className="ms-2">+</Button>
                                        <Button variant="danger" 
                                         onClick={()=> removeItem(detail.product?.id)} 
                                        className="ms-2">Remove Item</Button>
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </Table>
                {userCart.length > 0 && (
                    <Row 
                        style={{ bottom: 0}}
                        className={`bg-light text-balckjustify-content-center w-100`}
                    >
                        <Col style={{marginRight:'500px'}} className="py-4">
                            <h4>Total Price: Rs.{userCart[0]?.totalPrice.toFixed(2)}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                className="mt-3"
                                // onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                            <Button variant="success"
                                className="mt-3"
                                //onClick={()=> checkOut()}
                                onClick={()=> navigate('/shoppingCart')}
                            >       
                                <BsCartCheck size="1.7rem" />
                                Proceed to Buy
                            </Button>
                        </Col>
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default Cart;