import React from 'react';
import styled from 'styled-components';
import { AllProductsData } from '../../data';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'

const Container = styled.div`
    width: 100%;
    background-color: #111;
    color: white;
    padding-top: 40px;
    padding-bottom: 40px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`
const Image = styled.img`
    width: 50% !important;
`
const Title = styled.h1`
    font-size: 25px;
    color: yellowgreen;
    font-size: 40px;
`
const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Products = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 70%;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`
const Price = styled.h2`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
`
const Feature = styled.p`
    font-size: 20px;
`
const Color = styled.p`
    color: red;
    margin-top: 20px;
`

const Product = () => {
    const { id } = useParams();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <Container>
                <Wrapper>
                    {AllProductsData.filter(item => item.id === id).map(filteredItem => (
                        <Products>
                            <Image src={filteredItem.img} />
                            <RightWrapper>
                                <Title>{filteredItem.title}</Title>
                                <Price>{filteredItem.price} zł</Price>
                                {filteredItem.category !== "UBRANIA" &&
                                    <div>
                                        <Feature>Silnik: {filteredItem.engine}</Feature>
                                        <Feature>Moc: {filteredItem.moc}</Feature>
                                        <Feature>Rozruch: {filteredItem.rozruch}</Feature>
                                        <Feature>Skrzynia: {filteredItem.skrzynia}</Feature>
                                        <Feature>Koła: {filteredItem.kola}</Feature>
                                        <Feature>Hamulce: {filteredItem.hamulce}</Feature>
                                        <Feature>Wysokość siedziska: {filteredItem.wysokosc}mm</Feature>
                                        <Feature>Wymiary: {filteredItem.wymiary}</Feature>
                                    </div>}
                                {filteredItem.category === "UBRANIA" && <Feature>Rozmiary: S, M, L</Feature>}
                                {filteredItem.avail === "false" &&
                                    <Feature><Color>Produkt obecnie nie dostępny</Color></Feature>
                                }
                            </RightWrapper>
                        </Products>
                    ))}
                </Wrapper>
            </Container>
        </motion.div>
    )
}

export default Product