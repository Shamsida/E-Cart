import {
    useStripe,
    useElements,
    PaymentElement,
  } from "@stripe/react-stripe-js";
  import React, { useState } from "react";
  import { useNavigate } from "react-router";
  import { useContext } from 'react';
  import { userContext } from '../../App';
  import axios from "axios";
  
  const PaymentForm = ({ userCart,paymentData }) => {

    const user = useContext(userContext);
    const {  user1 , values }= user.state;

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
      setIsProcessing(true);
      
      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
        redirect: "if_required",
      });
  
      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        //toastNotify("An unexpected error occured.", "error");
        setIsProcessing(false);
      } else {
        const payload ={
          pickupAddress : values.address,
          pickupPhoneNumber : values.email,
          pickupEmail : values.mobilenumber,
          totalPrice : userCart[0]?.totalPrice.toFixed(2),
          stripePaymentIntentId : paymentData.stripePaymentIntentId,
          status : "order placed",
          paymentStatus:result.paymentIntent.status,
        }
        try{
          const userId = user1.userId;
          const response = await axios.post(`https://localhost:7152/api/Order/AddToOrder?userId=${userId}`,payload)
          console.log(response,"orderplaced");
        }
        catch(errors){
          console.log(errors);
        }
      }
      setIsProcessing(false);
    };

    return (
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button
          disabled={!stripe || isProcessing}
          className="btn btn-success mt-5 w-100"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Submit Order"}
          </span>
        </button>
      </form>
    );
  };
  
  export default PaymentForm;
  