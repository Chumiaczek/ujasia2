import React, { useState } from 'react';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route, useLocation } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import OfferCategories from './pages/OfferCategories'
import Product from './pages/products/Product'
import ProductGroups from './pages/products/ProductGroups'
import { AnimatePresence } from 'framer-motion'

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const location = useLocation();
    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="offers" element={<OfferCategories />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="productgroup/:category" element={<ProductGroups />} />
                    <Route path="product/:id" element={<Product />} />
                </Routes>
            </AnimatePresence>
            <Footer />
            <Copyright />
        </div>
    )
}

export default App