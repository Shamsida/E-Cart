import {
    useStripe,
    useElements,
    PaymentElement,
  } from "@stripe/react-stripe-js";
  import React, { useState } from "react";
  import { useNavigate } from "react-router";
  import { useContext } from 'react';
  import { userContext } from '../../App';
  import Modal from 'react-bootstrap/Modal';
  import { Button } from 'react-bootstrap';
  import axios from "axios";
  
  
  const PaymentForm = ({ cartInput,paymentData }) => {

    const user = useContext(userContext);
    const {  user1 , values }= user.state;
    console.log(cartInput,"userCart in payment form");
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate('/')

  }
  const handleShow = () => setShow(true);


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
          pickupPhoneNumber : values.number,
          pickupEmail :values.email,
          totalPrice : cartInput[0]?.totalPrice,
          stripePaymentIntentId : paymentData.stripePaymentIntentId,
          status : "order placed",
          totalItems:cartInput[0].totalItems,
          userId : user1.userId,
          paymentStatus:result.paymentIntent.status,
        }
        console.log(payload,"payload");
        try{
          const userId = user1.userId;
          const response = await axios.post(`https://localhost:7152/api/Order/AddToOrder?userId=${userId}`,payload)
          console.log(response,"orderplaced");
          handleShow();
        }
        catch(errors){
          console.log(errors);
        }
      }
      setIsProcessing(false);
    };

    return (
      <>
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
      <Modal show={show} onHide={handleClose}>
      <Modal.Body>
      <div className="w-100 text-center d-flex justify-content-center align-items-center">
      <div>
        <i
          style={{ fontSize: "7rem" }}
          className="bi bi-check2-circle text-success"
        ></i>
        <div className="pb-5">
          <h2 className=" text-success">Order has been Confirmed!</h2>
          <h5 className="mt-3">Your order ID: </h5>
        </div>
      </div>
    </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };
  
  export default PaymentForm;
  