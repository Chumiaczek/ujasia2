import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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


const OfferCategories = () => {

    return (
        <Container>
            <Wrapper>
                <CategoryContainer>
                    <CategoryTitle>Quady</CategoryTitle>
                    <hr width="200px" color="yellowgreen" />
                    <LinkWrapper>
                        <Links><Link to="/productgroup/ATV50CC">ATV 50CC</Link></Links>
                        <Links><Link to="/productgroup/ATV125CC">ATV 125-150CC</Link></Links>
                        <Links><Link to="/productgroup/ATV200CC">ATV 200-299CC</Link></Links>
                        <Links><Link to="/productgroup/ATV300CC">ATV 300-599CC</Link></Links>
                        <Links><Link to="/productgroup/ATV600CC">ATV 600-1000CC</Link></Links>
                    </LinkWrapper>
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Crossy</CategoryTitle>
                    <hr width="200px" color="yellowgreen" />
                    <LinkWrapper>
                        <Links><Link to="/productgroup/POCKETBIKES">POCKET BIKES</Link></Links>
                        <Links><Link to="/productgroup/CROSS50CC">CROSS 50CC</Link></Links>
                        <Links><Link to="/productgroup/CROSS125CC">CROSS 125CC</Link></Links>
                        <Links><Link to="/productgroup/CROSS150CC">CROSS 150-300CC</Link></Links>
                    </LinkWrapper>
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Pojazdy elektryczne</CategoryTitle>
                    <hr width="200px" color="yellowgreen" />
                    <LinkWrapper>
                        <Links><Link to="/productgroup/ATV">ATV</Link></Links>
                    </LinkWrapper>
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Kaski/Odzież</CategoryTitle>
                    <hr width="200px" color="yellowgreen" />
                    <LinkWrapper>
                        <Links><Link to="/productgroup/UBRANIA">KASKI</Link></Links>
                        <Links><Link to="/productgroup/UBRANIA">KURTKI</Link></Links>
                        <Links><Link to="/productgroup/UBRANIA">RĘKAWICE</Link></Links>
                        <Links><Link to="/productgroup/UBRANIA">BUZERY</Link></Links>
                        <Links><Link to="/productgroup/UBRANIA">KOSZULKI/BLUZY</Link></Links>
                        <Links><Link to="/productgroup/UBRANIA">BUTY</Link></Links>
                    </LinkWrapper>
                </CategoryContainer>
            </Wrapper>
        </Container>
    )
}

export default OfferCategories