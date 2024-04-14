import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import items from "./components/Item";
import "./App.css";

export const Globolcontext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([]);


  useEffect(() => {
    const NewItems = items.map((data) => {
      const altData = { ...data, count: 0 };
      return altData;
    });
    setItem(NewItems);
  }, []);

  const increaseItem = (id) => {
    const added = item.map((data) => {
      if (data.id === id) {
        data.count++;
        return data;
      }
      return data;
    });
    setItem(added);
  };

  const decreaseItem = (id) => {
    const added = item.map((data) => {
      if (data.id === id && data.count > 0) {
        data.count--;
        return data;
      }
      return data;
    });
    setItem(added);
  };




  return (
    <div>
      <Globolcontext.Provider
        value={{
          cart,
          setCart,
          count,
          setCount,
          item,
          setItem,
          decreaseItem, 
          increaseItem,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Globolcontext.Provider>
    </div>
  );
}

export default App;
