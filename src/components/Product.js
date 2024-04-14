import React, { useContext } from "react";
import { Globolcontext } from "../App";

const Product = ({ dat }) => {
  const { cart, setCart,increaseItem,decreaseItem } = useContext(Globolcontext);
  

  function add() {
    setCart((prev)=>[...prev,dat]);
  }

  function remove() {
    setCart(cart.filter((del) => del.id !== dat.id));
  }

  return (
    <div className="product">
      <h4>{dat.name}</h4>
      <p>{dat.amount}</p>
      <p>
        <button className="countbutton" onClick={()=>decreaseItem(dat.id)}>
          -
        </button>&nbsp;&nbsp;
        <span>{dat.count ? dat.count : "ADD"}</span>&nbsp;&nbsp;
        <button className="countbutton" onClick={()=>increaseItem(dat.id)}>
          +
        </button>
      </p>
      {cart.some((item) => item.id === dat.id) ? (
        <button onClick={remove} className="removebutton">
          Remove from Cart
        </button>
      ) : (
        <button onClick={add} className="button">
          Add Cart
        </button>
      )}
    </div>
  );
};

export default Product;
