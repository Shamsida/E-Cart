import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsCartCheck, BsCartX} from 'react-icons/bs';

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    
    return (
        <Container className="py-2 mt-2">
            <h1 className={`text-dark my-5 text-center`}>
                {isEmpty? 'Your Cart is Empty' : 'The Cart'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={'light'} className="mb-5">
                    <tbody>
                        {items.map((item, index)=>{
                            console.log(item.quantity);
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: ''}}>
                                                <img src={item.image} style={{ width: '6rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {!isEmpty &&
                    <Row 
                        style={{ bottom: 0}}
                        className={`bg-light text-balckjustify-content-center w-100`}
                    >
                        <Col style={{marginRight:'500px'}} className="py-4">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                className="mt-3"
                                onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                            <Button variant="success"
                                className="mt-3"
                            >
                                <BsCartCheck size="1.7rem" />
                                Clear Cart
                            </Button>
                        </Col>
                    </Row>}
            </Row>
        </Container>
    );
};

export default Cart;