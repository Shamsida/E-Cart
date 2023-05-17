import React, { useState , useEffect} from 'react';
import ProductCard from '../pages/ProductCard';
// import {categories1} from '../Data';
import { userContext } from '../App';
import { useContext } from 'react';

function Categories2() {
  const product = useContext(userContext);
  const { productdata }= product.state;

  const [category , setCategory] = useState([]);
    console.log(productdata);
    useEffect(() =>{ 
      const item = productdata.filter((todo)=> (todo.type)  === 'dress' );
      setCategory( item );
    },[]);
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

export default Categories2