import React from "react";
import { useCart } from "./CartContext";

function ShoppingCart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div >
      <h2 className=" text-xl font-bold ml-5 mt-5">Your Cart</h2>
      <div className=" flex">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className=" ml-5 text-xl font-medium"> 
              <img
                src={item.image}
                alt={item.name}
                className=" h-56 ml-5 mt-10"
              />
              {item.name} 
              
              <button  className= " bg-red-800 mt-5 ml-5 p-2 text-white rounded-md" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;



