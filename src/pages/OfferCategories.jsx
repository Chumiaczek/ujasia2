import React, { useState } from 'react';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OfferHeader from '../components/OfferHeader';
import OfferCategoriesSelection from '../components/OfferCategoriesSelection';
import Sidebar from '../components/Sidebar';

const OfferCategories = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <OfferHeader />
            <OfferCategoriesSelection />
            <Footer />
            <Copyright />
        </div>
    )
}

export default OfferCategories