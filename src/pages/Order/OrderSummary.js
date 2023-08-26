import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../../App';
import { useState } from "react";

const OrderSummary = () => {

  const navigate = useNavigate();
  const user = useContext(userContext);
  const {  user1 ,userCart, values }= user.state;

  const handleNextStatus = async () => {
  };

  const handleCancel = async () => {
  };

  return (
    <div>
      {/* {loading && <MainLoader />}
      {!loading && ( */}
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="text-success">Order Summary</h3>
            <span className={`btn btn-outline fs-6`}>
              {}
            </span>
          </div>
          <div className="mt-3">
            <div className="border py-3 px-2">Address : {values.address}</div>
            <div className="border py-3 px-2">Email : {values.email}</div>
            <div className="border py-3 px-2">
              Phone : {values.number}
            </div>
            <div className="border py-3 px-2">
              <h4 className="text-success">Order Items</h4>
              <div className="p-3">
                  {userCart.map(cartItem => (
                    <React.Fragment key={cartItem.cartId}>
                      <div className="d-flex">
                        <div className="d-flex w-100 justify-content-between">
                          <p>{cartItem.cartDetails[0]?.product?.title}</p>
                          <p>
                            ${cartItem.cartDetails[0]?.product?.price} x {cartItem.cartDetails[0]?.quantity} =
                          </p>
                        </div>
                        <p style={{ width: "70px", textAlign: "right" }}>
                          $
                          {cartItem.cartDetails[0]?.total}
                        </p>
                      </div>
                      {cartItem.cartDetails.slice(1).map((detail, index) => (
                        <div className="d-flex" key={index}>
                        <div className="d-flex w-100 justify-content-between">
                          <p>{detail.product?.title}</p>
                          <p>
                            ${detail.product?.price} x {detail.quantity} =
                          </p>
                        </div>
                        <p style={{ width: "70px", textAlign: "right" }}>
                          $
                          {detail.total}
                        </p>
                      </div>
                      ))}
                      </React.Fragment>
                    ))}
                <hr />
                <h4 className="text-danger" style={{ textAlign: "right" }}>
                  ${userCart[0]?.totalPrice.toFixed(2)}
                </h4>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              Back to Orders
            </button>
            {/* {userData.role == SD_Roles.ADMIN && ( */}
              <div className="d-flex">
                {/* {data.status! !== SD_Status.CANCELLED &&
                  data.status! !== SD_Status.COMPLETED && ( */}
                    <button
                      className="btn btn-danger mx-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  {/* )} */}
                <button
                  className={`btn btn`}
                  onClick={handleNextStatus}
                >
                  {}
                </button>
              </div>
            {/* )} */}
          </div>
        </>
      {/* )} */}
    </div>
  );
}

export default OrderSummary;