import React, { useEffect , useState } from 'react';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useParams} from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../App';
import axios from 'axios';

function OrderList() {

  const user = useContext(userContext);
  const { user1 }= user.state;
  const {orderId} = useParams();
  const [orderlist , setOrderlist] = useState([]);

  useEffect(() => {
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
    <div className='p-5'>
      <h3 className="text-success" style={{ textAlign: "center" }}>Order Details</h3>
      <div style={{display : 'flex' , justifyContent : 'space-between'}}>
        <div className='container mb-5' style={{width : '100%', border: '1px solid grey', borderRadius: '10px' }}>
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

        <h3 className="text-success" style={{marginLeft : '60px'}}>Shipment Details</h3>
        <div className='container mb-5' style={{width : '100%', border: '1px solid grey', borderRadius: '10px' , height:'auto' , marginTop : '10px'}}>
        <Table responsive="sm"  className="mb-3" borderless>
                    <tbody>
                            
                                <tr >
                                    <td>
                                        <div style={{ background: 'white', height: '7rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: ''}}>
                                                <img 
                                                src='https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-product-img-11.jpg' 
                                                style={{ width: '5rem'}} 
                                                className="rounded-circle"
                                                alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', marginTop : '40px', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                        Twin Cute Bunny Set Combo
                                        </h6>
                                    </td>
                                    <td><p style={{marginTop : '40px'}}>Rs. 499 </p></td>
                                    <td><p style={{marginTop : '40px'}}>Quantity (2) </p> </td>
                                </tr>
                    </tbody>
                </Table>
        </div>
        </div>

        <h3 className="text-success" style={{marginLeft : '60px'}}>Shipping Address</h3>
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
      
    </div>
  )
}

export default OrderList
