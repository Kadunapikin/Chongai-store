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

const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route>
          <Route index path="/" element={<Home />} />
          <Route index path="/About" element={<About />} />
          <Route index path="/Cart" element={<Cart />} />
          <Route index path="/Collection" element={<Collection />} />
          <Route index path="/Contact" element={<Contact />} />
          <Route index path="/Login" element={<Login />} />
          <Route index path="/Orders" element={<Orders />} />
          <Route index path="/Placeoder" element={<PlaceOrder />} />
          <Route index path="/Product" element={<Product />} />
        </Route>
      </Routes>
    </div>  )
}

export default App