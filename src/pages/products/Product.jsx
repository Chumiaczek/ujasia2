import React from 'react';
import styled from 'styled-components';
import { AllProductsData } from '../../data';
import { useParams } from 'react-router-dom';

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
`
const Price = styled.h2`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
`
const Feature = styled.p`
    font-size: 20px;
`

const Product = () => {
    const { id } = useParams();

    return (
        <div>
            <Container>
                <Wrapper>
                    {AllProductsData.filter(item => item.id === id).map(filteredItem => (
                        <Products>
                            <Image src={filteredItem.img} />
                            <RightWrapper>
                                <Title>{filteredItem.title}</Title>
                                <Price>{filteredItem.price} zł</Price>
                                <Feature>Silnik: {filteredItem.engine}</Feature>
                                <Feature>Moc: {filteredItem.moc}</Feature>
                                <Feature>Rozruch: {filteredItem.rozruch}</Feature>
                                <Feature>Skrzynia: {filteredItem.skrzynia}</Feature>
                                <Feature>Koła: {filteredItem.kola}</Feature>
                                <Feature>Hamulce: {filteredItem.hamulce}</Feature>
                                <Feature>Wysokość siedziska: {filteredItem.wysokosc}mm</Feature>
                                <Feature>Wymiary: {filteredItem.wymiary}</Feature>
                            </RightWrapper>
                        </Products>
                    ))}
                </Wrapper>
            </Container>
        </div>
    )
}

export default Product