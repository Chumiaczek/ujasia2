import React, { useState } from 'react';
import Categories from '../components/Categories';
import Companies from '../components/Companies';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import NewOffer from '../components/NewOffer';
import Serwis from '../components/Serwis';
import Sidebar from '../components/Sidebar';
import Statistics from '../components/Statistics';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Hero />
            <NewOffer />
            <Categories />
            <Companies />
            <Statistics />
            <Serwis />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Home
