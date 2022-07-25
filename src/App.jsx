import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import OfferCategories from './pages/OfferCategories'
import AllProducts from './pages/products/AllProducts'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="ujasia2" element={<Home />} />
                <Route path="offers" element={<OfferCategories />} />
                <Route path="contact" element={<Contact />} />
                <Route path="product" element={<AllProducts />} />
            </Routes>
        </div>
    )
}

export default App