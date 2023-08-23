import React, { useEffect , useState } from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
import { useContext } from 'react';
import { userContext } from '../App';
import axios from 'axios';

  const CartSummary = () => {
  
    const user = useContext(userContext);
    const { user1 , userCart, setuserCart }= user.state;

    useEffect(() => {
        fetchData();
      }, []);

        const fetchData = async () => {
          try {
            console.log(user1.userId);
            const userId = user1.userId;
            const response = await axios.get(`https://localhost:7152/api/Cart/GetCart?userId=${userId}`);
            const item = response.data;
             setuserCart(item);
             console.log(userCart.length,'length');
            } 
            catch (error) {
            console.error(error);
            }
        }

      console.log(userCart);

      const removeItem = async (id) => {
        try {
            await axios.delete(`https://localhost:7152/api/Cart/DeleteCartItems?userId=${user1.userId}&prodID=${id}`)
            .then((result)=>{
              if(result.status ===200){
                console.log("Item Removed successfully!");
                fetchData();
              }
            })
          } catch (error) {
            console.error(error);
          }
        }

        const DecreaseItemQuantity = async(id) => {
            try {
                await axios.put(`https://localhost:7152/api/Cart/DecreaseQuantity?userId=${user1.userId}&ProdID=${id}`)
                .then((result)=>{
                  if(result.status ===200){
                    console.log("Item quantity decreased..!");
                    fetchData();
                  }
                })
              } catch (error) {
                console.error(error);
            }
            fetchData();
        }

        const IncreaseItemQuantity = async (id) => {
            try {
                await axios.put(`https://localhost:7152/api/Cart/IncreaseQuantity?userId=${user1.userId}&ProdID=${id}`)
                .then((result)=>{
                  if(result.status ===200){
                    console.log("Item quantity increased..!");
                    fetchData();
                  }
                })
              } catch (error) {
                console.error(error);
            }
            fetchData();
        }


  return (
    <div className="container p-4 m-2">
      <h4 className="text-center text-success">Cart Summary</h4>

      {userCart.map(cartItem => (
        <React.Fragment key={cartItem.cartId}>
        <div
          className="d-flex flex-sm-row flex-column align-items-center custom-card-shadow rounded "
          style={{ background: "ghostwhite" }}
        >
          <div className="p-3">
            <img
              src={cartItem.cartDetails[0]?.product?.image || ''}
              alt={cartItem.cartDetails[0]?.product?.title}
              width={"100px"}
              className="rounded-circle"
            />
          </div>

          <div className="p-2 mx-3" style={{ width: "100%" }}>
            <div className="d-flex justify-content-between align-items-center">
              <h4 style={{ fontWeight: 300 }}>{cartItem.cartDetails[0]?.product?.title}</h4>
              <h4>
                ${(cartItem.cartDetails[0]?.total).toFixed(2)}
              </h4>
            </div>
            <div className="flex-fill">
              <h4 className="text-danger">${cartItem.cartDetails[0]?.total}</h4>
            </div>
            <div className="d-flex justify-content-between">
              <div
                className="d-flex justify-content-between p-2 mt-2 rounded-pill custom-card-shadow  "
                style={{
                  width: "100px",
                  height: "43px",
                }}
              >
                <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                  <i
                    className="bi bi-dash-circle-fill"
                    //onClick={() => handleQuantity(-1, cartItem)}
                  ></i>
                </span>
                <span>
                  <b>{cartItem.cartDetails[0]?.quantity}</b>
                </span>
                <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                  <i
                    className="bi bi-plus-circle-fill"
                    //onClick={() => handleQuantity(1, cartItem)}
                  ></i>
                </span>
              </div>

              <button
                className="btn btn-danger mx-1"
                //onClick={() => handleQuantity(0, cartItem)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        {cartItem.cartDetails.slice(1).map((detail, index) => ( 
          <div key={index}
          className="d-flex flex-sm-row flex-column align-items-center custom-card-shadow rounded"
          style={{ background: "ghostwhite" }}
        >
          <div className="p-3">
            <img
              src={detail.product?.image || ''}
              alt={detail.product?.title}
              width={"100px"}
              className="rounded-circle"
            />
          </div>

          <div className="p-2 mx-3" style={{ width: "100%" }}>
            <div className="d-flex justify-content-between align-items-center">
              <h4 style={{ fontWeight: 300 }}>{detail.product?.title}</h4>
              <h4>
                ${(detail.total).toFixed(2)}
              </h4>
            </div>
            <div className="flex-fill">
              <h4 className="text-danger">${detail.total}</h4>
            </div>
            <div className="d-flex justify-content-between">
              <div
                className="d-flex justify-content-between p-2 mt-2 rounded-pill custom-card-shadow  "
                style={{
                  width: "100px",
                  height: "43px",
                }}
              >
                <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                  <i
                    className="bi bi-dash-circle-fill"
                    //onClick={() => handleQuantity(-1, cartItem)}
                  ></i>
                </span>
                <span>
                  <b>{cartItem.cartDetails[0]?.quantity}</b>
                </span>
                <span style={{ color: "rgba(22,22,22,.7)" }} role="button">
                  <i
                    className="bi bi-plus-circle-fill"
                    //onClick={() => handleQuantity(1, cartItem)}
                  ></i>
                </span>
              </div>

              <button
                className="btn btn-danger mx-1"
                //onClick={() => handleQuantity(0, cartItem)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
         ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CartSummary;