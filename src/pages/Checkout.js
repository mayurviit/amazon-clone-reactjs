


import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Checkout.css"
import CheckoutProduct from '../CheckoutProduct';
import Subtotal from '../Subtotal';
// import CurrencyFormat from "react-currency-format";
function Checkout() {
 const [{basket,user},dispatch]=useStateValue();
    return (
     <div className='checkout'>
        <div className='checkout_left'>

           <img
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
           />
           {basket?.length === 0 ? (
            <div>
                <h2 className='checkout_title'>Your Shopping Basket is empty</h2>
            </div>
           ):(
            <div>
                <h2> Your Shopping Basket</h2>
                {/* list out all the checkout products */}
                {basket.map(item=>(
                    <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}/>
                ))}
            </div>
           )}
        </div>
        <div className="checkout__right">
          
           <Subtotal />
        </div>
     </div>

      );
    }
    
    export default Checkout
    