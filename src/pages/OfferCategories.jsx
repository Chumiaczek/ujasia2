import React from 'react';
import OfferHeader from '../components/OfferHeader';
import OfferCategoriesSelection from '../components/OfferCategoriesSelection';
import { motion } from 'framer-motion'

const OfferCategories = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <OfferHeader />
            <OfferCategoriesSelection />
        </motion.div>
    )
}

export default OfferCategories