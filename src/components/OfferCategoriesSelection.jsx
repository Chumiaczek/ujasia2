import React from 'react'
import styled from 'styled-components'

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
    align-items: center;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
`
const CategoryContainer = styled.div`
    width: 350px;
    background-color: black;
    border-radius: 5px;
    box-shadow: 0 0 4px #222222;
    border-top: 5px solid yellowgreen;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`
const CategoryTitle = styled.h1`
    margin-bottom: 10px;
    margin-top: 20px;
`
const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    height: 300px;
`
const Links = styled.a`
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    transition: 0.2s all ease-in-out;
    &:hover{
        color: yellowgreen;
        cursor: pointer;
    }
`
const Button = styled.button`
    background-color: yellowgreen;
    color: white;
    width: 200px;
    height: 50px;
    font-size: 25px;
    transition: 0.2s all ease-in-out;
    margin-top: 30px;
    margin-bottom: 20px;
    border: none;
    &:hover{
        background-color: #5d7c1f;
        cursor: pointer;
    }
`


const OfferCategories = () => {
    return (
        <Container>
            <Wrapper>
                <CategoryContainer>
                    <CategoryTitle>Quady</CategoryTitle>
                    <hr width="200px" color="yellowgreen" />
                    <LinkWrapper>
                        <Links>ATV 50CC</Links>
                        <Links>ATV 125-150CC</Links>
                        <Links>ATV 200-299CC</Links>
                        <Links>ATV 300-599CC</Links>
                        <Links>ATV 600-1000CC</Links>
                    </LinkWrapper>
                    <Button>Sprawdź</Button>
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Crossy</CategoryTitle>
                    <hr width="200px" color="yellowgreen" />
                    <LinkWrapper>
                        <Links>POCKET BIKES</Links>
                        <Links>CROSS 50CC</Links>
                        <Links>CROSS 125CC</Links>
                        <Links>CRISS 150-300CC</Links>
                    </LinkWrapper>
                    <Button>Sprawdź</Button>
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Quady</CategoryTitle>
                    <hr width="200px" color="yellowgreen" />
                    <LinkWrapper>
                        <Links>ATV</Links>
                    </LinkWrapper>
                    <Button>Sprawdź</Button>
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Quady</CategoryTitle>
                    <hr width="200px" color="yellowgreen" />
                    <LinkWrapper>
                        <Links>KASKI</Links>
                        <Links>KURTKI</Links>
                        <Links>RĘKAWICE</Links>
                        <Links>BUZERY</Links>
                        <Links>KOSZULKI/BLUZY</Links>
                        <Links>BUTY</Links>
                    </LinkWrapper>
                    <Button>Sprawdź</Button>
                </CategoryContainer>
            </Wrapper>
        </Container>
    )
}

export default OfferCategories