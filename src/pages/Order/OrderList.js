import React, { useEffect , useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useParams} from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../App';
import axios from 'axios';

function OrderList() {

  const user = useContext(userContext);
  const { user1 , setOrder }= user.state;
  const {orderId} = useParams();
  const [orderlist , setOrderlist] = useState([]);

  useEffect(() => {
    setOrder({
      userid : '',
      items : "",
      total : "",
      date : "",
      status : "",
      paymentstatus: ''
  });
    fetchData();
  },[]);

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7152/api/Order/GetOrderById?Id=${orderId}`);
        const item = response.data;
        setOrderlist(item);
        } 
        catch (error) {
        console.error(error);
        }
    }
    console.log(orderlist,'...orderlist');
    console.log(user1,'..userdata')

  return (
    <div className='p-5 mt-5'>
      {/* <h3 className="text-success" style={{ textAlign: "center" }}>Order Details</h3> */}
      <Container>
      <Row>
        <Col md={7}>
          <div className="custom-div left-column" >
            <h5 className="text-secondary ml-3" >Shipment Details</h5>
              <div className='container mb-5' style={{width : '100%', border: '1px solid grey', borderRadius: '10px' , height:'auto' , marginTop : '10px'}}>
                <Table responsive="sm"  className="mb-3" borderless>
                  <tbody>
                  {orderlist[0]?.orderDetail.map(cartItem => (
                    <tr key={cartItem.id}>
                      <td>
                        <div style={{ background: 'white', height: '7rem', overflow: 'hidden', display: 'flex',
                                justifyContent: 'center', alignItems: 'center' }}>
                              <div style={{ padding: ''}}>
                                <img 
                                  src = {`https://localhost:7152/Resources/${cartItem.product?.image || ''}`}
                                  style={{ width: '5rem'}} 
                                  className="rounded-circle"
                                  alt= {cartItem.product?.title} />
                                </div>
                              </div>
                        </td>
                        <td>
                            <h6 style={{ whiteSpace: 'nowrap', marginTop : '40px', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                {cartItem.product?.title}
                            </h6>
                        </td>
                        <td><p style={{marginTop : '40px'}}>Rs.  {cartItem.total} </p></td>
                        <td><p style={{marginTop : '40px'}}>Quantity ({cartItem.quantity}) </p> </td>
                      </tr>
                       ))}
                    </tbody>
                </Table>
              </div>
          </div>
        </Col>

        <Col md={5}>
          <div className="custom-div right-column" >
          
        <h5 className="text-secondary ml-3">Shipping Address</h5>
        <div className='container' style={{width : '100%', border: '1px solid grey', borderRadius: '10px' , height:'auto'}}>
        <Table responsive="sm"  className="m-3" borderless >
          <tbody>
            <tr>
              <td>{user1.firstname} {user1.lastname}</td>
            </tr>
            <tr>
              <td>{orderlist[0]?.pickupAddress}</td>
            </tr>
            <tr>
              <td>{orderlist[0]?.pickupEmail}</td>
            </tr>
            <tr>
              <td>{orderlist[0]?.pickupPhoneNumber}</td>
            </tr>
          </tbody>
        </Table>
        </div>
        <div className='container mt-3' style={{width : '100%', border: '1px solid grey', borderRadius: '10px' }}>
        <Table responsive="sm"  className="m-3" borderless >
          <tbody>
            <tr>
              <td>Order date</td>
              <td>{orderlist[0]?.createDate}</td>
            </tr>
            <tr>
              <td>Order #</td>
              <td>{orderlist[0]?.id}</td>
            </tr>
            <tr>
              <td>Order total</td>
              <td>{orderlist[0]?.totalPrice}</td>
            </tr>
          </tbody>
        </Table>
        </div>
          </div>
        </Col>
      </Row>
    </Container>
      
    </div>
  )
}

export default OrderList
