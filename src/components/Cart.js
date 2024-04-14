import React, { useContext, useEffect, useState } from "react";
import { Globolcontext } from "../App";



const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart,count} = useContext(Globolcontext);
  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + parseInt(curr.amount) * parseInt(curr.count),
        0
      )
    );
  }, [cart,count]);
  return (
    <div className="cart">
      <h2>Product Details</h2>

      {cart.map((each) => (
        <div className="cart-product" key={each.id}>
          <p>Dish: {each.name}</p>
          <p>Price: Rs.{each.amount}</p>
          <p>count:{each.count}</p>
          <p>Total Price: Rs.{parseInt(each.amount) * parseInt(each.count)}</p>
        </div>
      ))}

      <h3>Total Amount:Rs.{total}</h3>
    </div>
  );
};

export default Cart;
