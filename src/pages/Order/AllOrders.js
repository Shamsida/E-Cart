import React, { useEffect , useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../../App';
import axios from 'axios';

function AllOrders() {
    const user = useContext(userContext);
    const { user1 }= user.state;
    const [orderlist , setOrderlist] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
      }, [user1]);

        const fetchData = async () => {
          try {
            console.log(user1.userId);
            const userId = user1.userId;
            const response = await axios.get(`https://localhost:7152/api/Order/GetOrderByUserId?userId=${userId}`);
            const item = response.data;
            setOrderlist(item);
            } 
            catch (error) {
            console.error(error);
            }
        }
        console.log(orderlist,'...orderlist');

  return (
    <div>
        <h2 className="text-success" style={{ textAlign: "center" }}>My Orders</h2>
         <div className="table ">
          <div className="p-5">
            <div className="row border" style={{ textAlign: "center" }}>
              <div className="col-1">ID</div>
              <div className="col-1">Items</div>
              <div className="col-1">Total</div>
              <div className="col-3">Date</div>
              <div className="col-2">Order Status</div>
              <div className="col-2">Payment Status</div>
              <div className="col-2"></div>
            </div>
            {orderlist ? (orderlist.map(orderItem => (
            <div className="row border" style={{ textAlign: "center" }} key={orderItem.id}>
                  <div className="col-1">{orderItem.id}</div>
                  <div className="col-1">{orderItem.totalItems}</div>
                  <div className="col-1">{orderItem.totalPrice}</div>
                  <div className="col-3">{orderItem.createDate}</div>
                  <div className="col-2">{orderItem.status}</div>
                  <div className="col-2">{orderItem.paymentStatus}</div>
                  <div className="col-2">
                    <button className="btn btn-success" onClick={()=> navigate(`/orderlist/${orderItem.id}`)}>
                      Details
                    </button>
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

export default AllOrders
