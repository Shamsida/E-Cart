import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import  PaymentForm  from "./Payment/PaymentForm";
import  OrderSummary  from "./Order/OrderSummary";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../App';
import axios from "axios";

const Payment = () => {

  const user = useContext(userContext);
  const { userCart }= user.state;

  const [paymentData,setPaymentData] = useState([])
  //const [cartData , setCartData] = useState([])
  const {cartId} = useParams()

  const Payment = async () => {
    try {
      const response =await axios.post(`https://localhost:7152/api/Payment?cartId=${cartId}`);
      console.log(response.data,"payment response");
        setPaymentData(response.data.result)
        console.log(paymentData,"payment");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userCart,'..cartdata');

  useEffect(() => {
    Payment();
  }, []);
  
  const stripePromise = loadStripe(
    "pk_test_51NkgGASAxYNhzbkeIZt09MC0VaeP1fhxWb97RMzWwZNtA1raInjoYsghNhDG6r1ycUgoqKceNkjWLbnGn0smO4iN002FNyVJrJ"
  );

  if(!paymentData.clientSecret){
    return <>Loading</>
  }
  const options = {
    // passing the client secret obtained from the server
    clientSecret: paymentData.clientSecret,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="container m-5 p-5">
        <div className="row">
          <div className="col-md-7">
          <OrderSummary cartInput={userCart}  />
          </div>
          <div className="col-md-4 offset-md-1">
            <h3 className="text-success">Payment</h3>
            <div className="mt-5">
              <PaymentForm cartInput={userCart} paymentData={paymentData} />
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Payment;
