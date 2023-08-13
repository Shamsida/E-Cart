import React, { useEffect , useState } from 'react';
import { Button, Card} from 'react-bootstrap';
//import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { AiOutlineHeart} from 'react-icons/ai';
import { Link} from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../App';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function ProductCard(props) {

    const user = useContext(userContext);
    const { confirm , user1 }= user.state;
    //const [user1, setUser1] = useState([0]);

  let { image, price, title, id} = props.data;
    //const { addItem } = useCart();

    const navigate = useNavigate();

    const addItemToCart = async () => {
        console.log(props.item);
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

    const addToWishlist = async () =>{
        const prodID = id;
        try {
            console.log(user1.userId);
            const userId = user1.userId;
            const response = await axios.post(`https://localhost:7152/api/Wishlist/AddToWishList?userId=${userId}&prodID=${id}`);
            if(response.status ===200){
                console.log("Item added to Wishlist..!");
              }
            console.log('Item added to cart:', response.data);
            alert('Item added to Wishlist');
          } catch (error) {
            console.error('Error adding item to Wishlist:', error.response.data);
          }
    }
  return (
    <div style={{margin:'20px'}}>
    <Card 
    style={{ width: '25rem', height: 'auto' }}
    className={`bg-lihgt text-black text-center p-0 overflow-hidden shadow mx-auto mb-4`}
>
        <Link to={`/productdetails/${id}`}>
        <div style={{ background: 'white', height: '19rem', display: 'flex',
        justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
            <div style={{ width: '20rem', marginTop:'30px'}}>
                <Card.Img variant="top" src={`https://localhost:7152/Resources/${image}`} style={{width:'300px'}} />
            </div>
        </div>
        </Link>
    <Card.Body>
        <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
            {title}
        </Card.Title>
        <Card.Title>
            Rs. <span className="h3">{price}</span>
        </Card.Title>
        <div style={{display :"inline-grid", gridTemplateColumns:'auto auto', marginTop:'10px'}}>
        <div style={{marginRight:'20px'}}>
        <Button
        onClick={()=>{confirm? addItemToCart(): navigate('/login')}}
        className={`d-flex align-item-center m-auto border-0`}
        style={{}}
    >
        <BsCartPlus size="1.8rem" />
        Add to cart
    </Button>
        </div>
        
        <Button
            onClick={()=> {confirm? addToWishlist() : navigate('/login')}}
            className={`d-flex align-item-center m-auto border-0`}
            style={{backgroundColor:'#f47c7c'}}
        >
            <AiOutlineHeart size="1.8rem" />
            Add to Wish List
        </Button>
        </div>
    </Card.Body>
</Card>
    </div>
  )
}

export default ProductCard
