import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/cart" element={<Cart />} />
          <Route index path="/collection" element={<Collection />} />
          <Route index path="/contact" element={<Contact />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/orders" element={<Orders />} />
          <Route index path="/placeoder" element={<PlaceOrder />} />
          <Route index path="/product/:productId" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </div>  )
}

export default App