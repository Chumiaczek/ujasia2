import React from 'react';
import Categories from '../components/Categories';
import Companies from '../components/Companies';
import Hero from '../components/Hero';
import NewOffer from '../components/NewOffer';
import Serwis from '../components/Serwis';
import Statistics from '../components/Statistics';

const Home = () => {

    return (
        <div>
            <Hero />
            <NewOffer />
            <Categories />
            <Companies />
            <Statistics />
            <Serwis />
        </div>
    )
}

export default Home
