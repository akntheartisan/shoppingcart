import React, { useContext, useEffect, useState } from 'react'
import items from './Item';
import Product from './Product';
import { Globolcontext } from '../App';

const Home = () => {
   const {item} = useContext(Globolcontext)

  return (
   <div style={{display:'flex',flexDirection:"column",alignItems:"center",rowGap:"10px",flexWrap:"wrap"}}>
       <h2>Welcome to Arvind Hotel</h2>
       <h3>Today's Menu</h3>
    <div className='product-container'>
        {item.map((each)=>(
            <div key={each.id}>
               <Product  dat={each} />
            </div>
        ))}
    </div>
   </div>

  )
}

export default Home