import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();
// const ShopContext = createContext();
// export { ShopContext };


const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cardItems, setCardItems] = useState({});
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

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

    const getProductData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if(response.data.success) {
                setProducts(response.data.products);
                console.log(response.data);
                
            }            
            else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            
        }
    }

    useEffect(() => {
        getProductData();
    }, []);

    const value = {
        products , currency , delivery_fee,
        search, setShowSearch, setSearch, showSearch, cardItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, backendUrl

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
