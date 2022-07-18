import React from 'react'
import styled from 'styled-components'
import background from '../assets/quadsondesert.webp'
import quad from '../assets/quadcategory.jpeg'
import cross from '../assets/cross.jpeg'
import helmet from '../assets/helmet.webp'

const Container = styled.div`
    background-image: url(${background});
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
    @media screen and (max-width: 1250px){
        height: 130vh;
    }
`
const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: #111111b2;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
`
const Title = styled.h1`
    font-family: 'Orbitron', sans-serif;
    font-size: 40px;
`
const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 100px;
    flex-wrap: wrap;
    @media screen and (max-width: 1250px){
        flex-direction: column;
    }
`
const CategoryQuad = styled.div`
    height: 400px;
    width: 400px;
    background-image: url(${quad});
    background-position: center;
    border-radius: 100%;
    transition: 0.2s all ease-in-out;
    &:hover{
        border-radius: 10%;
    }
    @media screen and (max-width: 1250px){
        width: 200px;
        height: 200px;
    }
`
const CategoryCross = styled.div`
    height: 400px;
    width: 400px;
    background-image: url(${cross});
    background-position: center;
    border-radius: 100%;
    transition: 0.2s all ease-in-out;
    &:hover{
        border-radius: 10%;
    }
    @media screen and (max-width: 1250px){
        width: 200px;
        height: 200px;
    }
`
const CategoryHelmet = styled.div`
    height: 400px;
    width: 400px;
    background-image: url(${helmet});
    background-position: center;
    border-radius: 100%;
    transition: 0.2s all ease-in-out;
    &:hover{
        border-radius: 10%;
    }
    @media screen and (max-width: 1250px){
        width: 200px;
        height: 200px;
    }
`
const CategoryOverlay = styled.div`
    opacity: 0;
    background-color: #99cd32ab;
    transition: 0.2s all ease-in-out;
    width: 100%;
    height: 100%;
    border-radius: 100%;
`
const Category = styled.div`
    height: 400px;
    width: 400px;
    &:hover ${CategoryOverlay}{
        opacity: 1;
        border-radius: 10%;
    }
    @media screen and (max-width: 1250px){
        width: 200px;
        height: 200px;
        margin-bottom: 25px;
    }
`
const CategoryWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
const CategoryTitle = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
`

const Categories = () => {
    return (
        <Container>
            <Overlay>
                <Wrapper>
                    <Title>OFERTA</Title>
                    <CategoryContainer>
                        <Category>
                            <CategoryQuad>
                                <CategoryOverlay>
                                    <CategoryWrapper>
                                        <CategoryTitle>Quady</CategoryTitle>
                                    </CategoryWrapper>
                                </CategoryOverlay>
                            </CategoryQuad>
                        </Category>
                        <Category>
                            <CategoryCross>
                                <CategoryOverlay>
                                    <CategoryWrapper>
                                        <CategoryTitle>Crossy</CategoryTitle>
                                    </CategoryWrapper>
                                </CategoryOverlay>
                            </CategoryCross>
                        </Category>
                        <Category>
                            <CategoryHelmet>
                                <CategoryOverlay>
                                    <CategoryWrapper>
                                        <CategoryTitle>Kaski</CategoryTitle>
                                    </CategoryWrapper>
                                </CategoryOverlay>
                            </CategoryHelmet>
                        </Category>
                    </CategoryContainer>
                </Wrapper>
            </Overlay>
        </Container>
    )
}

export default Categories