import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.BestSeller));
        setBestSeller(bestProduct.slice(0, 5));

    }, []);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl' >
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores asperiores, non cumque distinctio.
            </p>
        </div>

    </div>
  )
}

export default BestSeller