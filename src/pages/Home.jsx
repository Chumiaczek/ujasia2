import React from 'react';
import Categories from '../components/Categories';
import Companies from '../components/Companies';
import Hero from '../components/Hero';
import NewOffer from '../components/NewOffer';
import Serwis from '../components/Serwis';
import Statistics from '../components/Statistics';
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            <NewOffer />
            <Categories />
            <Companies />
            <Statistics />
            <Serwis />
        </motion.div>
    )
}

export default Home
