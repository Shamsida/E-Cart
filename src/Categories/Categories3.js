import React, { useState , useEffect} from 'react';
import ProductCard from '../pages/ProductCard';
// import {categories1} from '../Data';
import { userContext } from '../App';
import { useContext } from 'react';
import axios from 'axios';



function Categories3() {
  const product = useContext(userContext);
  const { productdata }= product.state;

  const [category , setCategory] = useState([]);
  console.log(productdata);

  // useEffect(() =>{ 
  //   const item = productdata.filter((todo)=> (todo.type)  === 'babycare' );
  //   setCategory( item );
  // },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7152/api/Product/GetProductsByCategory', {
        params: {
          categoryName: 'babycare',
        },
        });
        const item = response.data;
        setCategory(item);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
    <div style={{display :"inline-grid", gridTemplateColumns:'auto auto auto', marginTop:'20px'}}>


    {category.map((item, i)=>(
        <ProductCard data={item} item={item} key={i} />
    ))}
    
    </div>
    </div>
    
   
  )
}

export default Categories3