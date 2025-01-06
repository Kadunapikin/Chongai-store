import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cardItems, setCardItems] = useState({});
    const navigate = useNavigate();

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

    // const getCartAmount = () => {
    //     let totalAmount = 0;
    
    //     for (const itemId in cardItems) {
    //         // Find the product corresponding to the current item ID
    //         const itemInfo = products.find((product) => product._id === itemId);
    
    //         if (itemInfo) {
    //             // Assume cardItems[itemId] is a quantity, not an object
    //             const quantity = cardItems[itemId];
    //             if (quantity > 0) {
    //                 totalAmount += itemInfo.price * quantity;
    //             }
    //         }
    //     }
    
    //     return totalAmount;
    // };
    
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cardItems) {
            let itemInfor = products.find((product) => product._id === items);
            for(const item in cardItems[items]) {
                try {
                    if (cardItems[items][item] > 0) {
                        totalAmount +=  itemInfor.price * cardItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const updateQuantity =  async (itemId, size, quantity) => {
        let cartData = structuredClone(cardItems);

        cartData[itemId][size] = quantity;
        setCardItems(cartData);
    }

    const value = {
        products , currency , delivery_fee,
        search, setShowSearch, setSearch, showSearch, cardItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
