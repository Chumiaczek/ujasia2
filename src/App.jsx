import React, { useState } from 'react';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import OfferCategories from './pages/OfferCategories'
import Product from './pages/products/Product'
import ProductGroups from './pages/products/ProductGroups'

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Routes>
                <Route path="ujasia2" element={<Home />} />
                <Route path="offers" element={<OfferCategories />} />
                <Route path="contact" element={<Contact />} />
                <Route path="productgroup/:category" element={<ProductGroups />} />
                <Route path="product/:id" element={<Product />} />
            </Routes>
            <Footer />
            <Copyright />
        </div>
    )
}

export default App