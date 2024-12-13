import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

  const { products , currency , cardItems } = useContext(ShopContext); 
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    const tempData = [];

    for(const items in cardItems) {
      for(const item in cardItems[items]) {
        if (cardItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cardItems[items][item],            
          });
        }
      }
    }
    setCartData(tempData);
    
  }, [cardItems]);

  return (
    <div>Cart</div>
  )
}

export default Cart