import React, { useEffect , useState } from 'react';
import { Button, Card} from 'react-bootstrap';
//import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { AiFillHeart} from 'react-icons/ai';
import { Link} from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../App';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function WishList(props) {
    const user = useContext(userContext);
    const { confirm, user1 , userWishlist, setuserWishlist}= user.state;
    const navigate = useNavigate();

    let { product} = props.data;

    const fetchData = async () => {
        try {
          console.log(user1.userId);
          const userId = user1.userId;
          const response = await axios.get(`https://localhost:7152/api/Wishlist/GetWishlistById?userId=${userId}`);
          const item = response.data;
          setuserWishlist(item);
          } 
          catch (error) {
          console.error(error);
          }
      }

        const addItemToCart = async (id) => {
            const prodID = id;
            try {
                console.log(user1.userId);
                const userId = user1.userId;
                const response = await axios.post(`https://localhost:7152/api/Cart/AddToCart?userId=${userId}`, {
                  prodID : prodID,
                  qty : 1
                });
          
                console.log('Item added to cart:', response.data);
                alert('Item added to cart');
              } catch (error) {
                console.error('Error adding item to cart:', error.response.data);
              }
        }

        const DeleteWishlist = async (id)=>{
             if(window.confirm("Are you sure to remove item") === true){
               try {
                const userId = user1.userId;
                 await axios.delete(`https://localhost:7152/api/Wishlist/DeleteWishlistItem?userId=${userId}&productId=${id}`)
                 .then((result)=>{
                   if(result.status ===200){
                     console.log("Item removed successfully!");
                     fetchData();
                     //toast.success("Student deleted successfully!");
                     //alert("Student deleted successfully!");
                   }
                 })
               } catch (error) {
                 console.error(error);
               }
             }   
            }

  return (
    <div style={{margin:'20px'}}>
    <Card 
        style={{ width: '25rem', height: 'auto' }}
        className={`bg-lihgt text-black text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
        <Link to={`/productdetails/${product?.id}`}>
        <div style={{ background: 'white', height: '19rem', display: 'flex',
        justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
            <div style={{ width: '20rem', marginTop:'30px'}}>
                <Card.Img variant="top" src={`https://localhost:7152/Resources/${product?.image}`} style={{width:'300px'}} />
            </div>
        </div>
        </Link>
        <Card.Body>
            <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                {product?.title}
            </Card.Title>
            <Card.Title>
                Rs. <span className="h3">{product?.price}</span>
            </Card.Title>
            <div style={{display :"inline-grid", gridTemplateColumns:'auto auto', marginTop:'10px'}}>
            <div style={{marginRight:'20px'}}>
            <Button
                 onClick={()=>{confirm? addItemToCart(product?.id): navigate('/login')}}
                className={`d-flex align-item-center m-auto border-0`}
                style={{}}
            >
            <BsCartPlus size="1.8rem" />
                Add to cart
            </Button>
            </div>
        
            <Button
                onClick={()=>DeleteWishlist(product?.id)}
                className={`d-flex align-item-center m-auto border-0`}
                style={{backgroundColor:'#f47c7c'}}
            >
            <AiFillHeart size="1.8rem" />
                Remove Wish List
            </Button>
            </div>
        </Card.Body>
    </Card>
    </div>
  )
}

export default WishList
