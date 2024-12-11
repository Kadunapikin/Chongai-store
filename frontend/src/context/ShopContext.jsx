import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cardItems, setCardItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product size');
            return;
        }
        let cartData = structuredClone(cardItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCardItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cardItems) {
            for (const item in cardItems[items]) {
                try {
                    if (cardItems[items][item] > 0) {
                        totalCount += cardItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    // useEffect(() => {
    //     console.log(cardItems);
        
    // }, [cardItems]);

    const value = {
        products , currency , delivery_fee,
        search, setShowSearch, setSearch, showSearch, cardItems, addToCart, getCartCount

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
