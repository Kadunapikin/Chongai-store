import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProduct = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    
    useEffect(() => {
        if (products.length === 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            console.log(productsCopy.slice(0, 5));
            
        }
    }, []);



  return (
    <div>RelatedProduct</div>
  )
}

export default RelatedProduct