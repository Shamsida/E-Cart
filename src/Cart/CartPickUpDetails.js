import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useContext } from 'react';
import { userContext } from '../App';

  const CartPickUpDetails = () => {

    const user = useContext(userContext);
    const { user1 , userCart }= user.state;
    const [loading, setLoading] = useState(false);
  

  const navigate = useNavigate();
  //const [userInput, setUserInput] = useState(initialUserData);
  //const [initiatePayment] = useInitiatePaymentMutation();

  const handleUserInput = (e) => {
    // const tempData = inputHelper(e, userInput);
    // setUserInput(tempData);
  };

  useEffect(() => {
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="border pb-5 pt-3">
      <h1 style={{ fontWeight: "300" }} className="text-center text-success">
        Pickup Details
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="col-10 mx-auto">
        <div className="form-group mt-3">
          Pickup Name
          <input
            type="text"
            //value={userInput.name}
            className="form-control"
            placeholder="name..."
            name="name"
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="form-group mt-3">
          Pickup Email
          <input
            type="email"
            //value={userInput.email}
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
           // value={userInput.phoneNumber}
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
            <h5>No of items : </h5>
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