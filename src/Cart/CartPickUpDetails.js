import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useContext } from 'react';
import { userContext } from '../App';
import axios from 'axios';

  const CartPickUpDetails = () => {

    const user = useContext(userContext);
    const { todos, user1 , userCart , values, setValues }= user.state;
    const [loading, setLoading] = useState(false);
    const [cartId , setCartId] = useState('');
    //const [data ,setData] = useState(todos);
  

  const navigate = useNavigate();
  //const [userInput, setUserInput] = useState(initialUserData);
  //const [initiatePayment] = useInitiatePaymentMutation();

  useEffect(() => {
    fetchData();
  }, []);

    const fetchData = async () => {
      try {
        console.log(user1.userId);
        const userId = user1.userId;
        const response = await axios.get(`https://localhost:7152/api/user/GetUsersById?id=${userId}`);
        const item = response.data;
        console.log(item,"item");
         setValues({email:item.email,number:item.number});
         setCartId(item.carts[0].cartId);
         console.log(cartId,'..cartid');
         console.log(values,"values");
        } 
        catch (error) {
        console.error(error);
        }
    }
    console.log(cartId,'..cartid');

    const handleUserInput  = (event) => {
      const {name , value} = event.target;
      console.log(user.state.values)
      setValues( (prev) => {
         return { ...prev, [name] : value };
      });
      console.log(values,"values address");
      console.log(user.state.values)
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //navigate('/payment');
    navigate(`/payment/${cartId}`);
  };

  return (
    <div className="border pb-5 pt-3">
      <h1 style={{ fontWeight: "300" }} className="text-center text-success">
        Pickup Details
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="col-10 mx-auto">
        <div className="form-group mt-3">
          Pickup Address
          <input
            type="text"
            value={user.state.values.address}
            className="form-control"
            placeholder="Address"
            name="address"
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="form-group mt-3">
          Pickup Email
          <input
            type="email"
            defaultValue={user.state.values.email}
            className="form-control"
            placeholder="email..."
            name="email"
            onChange={handleUserInput}
            required
          />
        </div>

        <div className="form-group mt-3">
          Pickup Phone Number
          <input
            type="number"
            defaultValue={user.state.values.number}
            className="form-control"
            placeholder="phone number..."
            name="phoneNumber"
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="form-group mt-3">
          <div className="card p-3" style={{ background: "ghostwhite" }}>
            <h5>Grand Total : ${userCart[0]?.totalPrice.toFixed(2)} </h5>
            <h5>No of items : {userCart[0]?.totalItems}</h5>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success form-control mt-3"
          disabled={loading}
        >
          {loading ? 'done' : "Looks Good? Place Order!"}
        </button>
      </form>
    </div>
  );
};

export default CartPickUpDetails;