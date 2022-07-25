import React, { useState } from 'react';
import Copyright from '../../components/Copyright';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Container = styled.div`
    color: white;
    width: 100%;
    background-color: #111;
    padding-top: 40px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 40px;
`
const PageTitle = styled.h1`
    font-size: 50px;
    width: 100%;
    text-align: center;
`
const Products = styled.div`
    height: 500px;
    width: 400px;
    background-color: black;
    margin-bottom: 40px;
`
const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    
`
const Price = styled.h2`
    color: greenyellow;
`
const Image = styled.img`
    width: 70% !important;
`
const Button = styled.button`
    width: 150px;
    height: 50px;
    background: yellowgreen;
    color: white;
    border: none;
    font-size: 25px;
    margin-top: 40px;
    transition: 0.2s all ease-in-out;
    &:hover{
        background-color: #5d7c1f;
        cursor: pointer;
    }
`


const Product = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Navbar isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />

            <Container>
                <PageTitle>Quady ATV 50CC</PageTitle>
                <Wrapper>
                    <Products>
                        <ProductWrapper>
                            <Image />
                            <Title></Title>
                            <Price> zł</Price>
                            <Button><Link>Sprawdź</Link></Button>
                        </ProductWrapper>
                    </Products>
                </Wrapper>
            </Container>


            <Footer />
            <Copyright />
        </div>
    )
}

export default Product