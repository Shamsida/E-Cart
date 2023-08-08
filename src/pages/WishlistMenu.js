import React, { useState , useEffect} from 'react';
import WishList from './WishList';
import { userContext } from '../App';
import { useContext } from 'react'; 
import axios from 'axios';

function WishlistMenu() {
    const user = useContext(userContext);
    const { user1 , userWishlist, setuserWishlist}= user.state;

    //const [userWishlist, setuserWishlist] = useState([]);

    useEffect(() => {
        fetchData();
      }, [user1]);

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
        console.log(userWishlist,'WISHLIST');
        console.log(user1.userId , 'USERID');

  return (
    <div>
        <div style={{display :"inline-grid", gridTemplateColumns:'auto auto auto', marginTop:'20px'}}>


        {userWishlist.map((item, i)=>(
            <WishList data={item} item={item} key={i} />
        ))}
    
        </div>
    </div>
    
   
  )
}

export default WishlistMenu
