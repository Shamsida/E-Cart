import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../App';
import axios from 'axios';
import Cookies from 'js-cookie';

function UserOrders() {
    const user = useContext(userContext);
    const { user1 }= user.state;
    const [orderlist , setOrderlist] = useState();
    const navigate = useNavigate();

    const token = Cookies.get('jwtToken');


    useEffect(() => {
        fetchData();
      }, [user1]);

        const fetchData = async () => {
          try {
            console.log(user1.userId);
            const userId = user1.userId;
            const response = await axios.get(`https://localhost:7152/api/Order/GetOrders`,{
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
            });
            const item = response.data;
            setOrderlist(item);
            } 
            catch (error) {
            console.error(error);
            }
        }
        console.log(orderlist,'...orderlist');
        
  return (
    <div style={{marginLeft:250 , marginRight:100}}>
    <h1 className='mt-5'style={{marginLeft:30}} >Users OrderList</h1>
      <div className="table ">
          <div className="p-5 pt-3">
            <div className="row border" style={{ textAlign: "center" }}>
              <div className="col-1">UserID</div>
              <div className="col-1">Items</div>
              <div className="col-1">Total</div>
              <div className="col-3">Date</div>
              <div className="col-2">Order Status</div>
              <div className="col-2">Payment Status</div>
              <div className="col-2"></div>
            </div>
            {orderlist ? (orderlist.map(orderItem => (
            <div className="row border mt-2" style={{ textAlign: "center" , height:'5rem' }} key={orderItem.userId}>
                  <div className="col-1 mt-3">{orderItem.userId}</div>
                  <div className="col-1 mt-3">{orderItem.totalItems}</div>
                  <div className="col-1 mt-3">{orderItem.totalPrice}</div>
                  <div className="col-3 mt-3">{orderItem.createDate}</div>
                  <div className="col-2 mt-3">{orderItem.status}</div>
                  <div className="col-2 mt-3">{orderItem.paymentStatus}</div>
                  <div className="col-2 mt-3" style={{display: 'flex',justifyContent: 'center'}}>
                    {/* <button className="btn btn-success" onClick={()=> navigate(`/orderlist/${orderItem.userId}`)}>
                      Details
                    </button> */}
                    <Link  to={`/orderlist/${orderItem.id}`} 
                                      className='btn btn-outline-primary p-2'
                                      style={{height: '33px' , display: 'flex' , justifycontent: 'center'}}>
                                        <FaEye/></Link>
                                        <Link to={`/admin/editorders/${orderItem.id}`} 
                                      className='btn btn-outline-primary p-2'
                                      style={{height: '33px' , display: 'flex' , justifycontent: 'center'}}>
                                        <BsFillPencilFill/></Link>
                  </div>
                </div>
            ))
            ) : (
                <div className="row">
                  <div className="col">Loading...</div>
                </div>
            )}
        </div>
        </div>
    </div>
  )
}

export default UserOrders
