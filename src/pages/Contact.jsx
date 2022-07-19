import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactHeader from '../components/ContactHeader';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <ContactHeader />
            <ContactForm />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Contact