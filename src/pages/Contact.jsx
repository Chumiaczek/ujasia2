import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactHeader from '../components/ContactHeader';
import { motion } from 'framer-motion'
import Maps from '../components/Maps.jsx'

const Contact = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <ContactHeader />
            <ContactForm />
            <Maps />
        </motion.div>
    )
}

export default Contact