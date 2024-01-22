import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider"
function CheckoutProduct({id,image,title,rating,price}) {

     const [{basket},dispatch]=useStateValue();
    const RemoveFromBasket=()=>{
        //remove form basket
        console.log(id,title,price);
          dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
          });
    };
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_img' src={image} alt=''></img>

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>

            <p className='checkoutProduct_price'>
                <small> $</small>
                <strong>{price}</strong>
            </p>

            <div className='checkoutProduct_rating'>
                   {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
            </div>
            <button onClick={RemoveFromBasket}> Remove From basket</button> 
        </div>
      
    </div>
  )
};

export default CheckoutProduct
