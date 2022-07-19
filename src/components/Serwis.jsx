import React from 'react'
import styled from 'styled-components'
import photo from '../assets/keys.jpeg'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 70vh;
    width: 100%;
    background-color: #111;
    color: white;
    @media screen and (max-width: 768px){
        height: 80vh;
    }
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const TextContainer = styled.div`
    flex: 1;
`
const PhotoContainer = styled.div`
    flex: 1;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const TextTitle = styled.h1`
    color: yellowgreen;
    font-size: 50px;
`
const TextDescription = styled.h3`
    width: 50%;
    margin-top: 50px;
    @media screen and (max-width: 768px){
        width: 80%;
    }
`
const Button = styled.button`
    margin-top: 50px;
    width: 200px;
    height: 50px;
    background-color: yellowgreen;
    color: white;
    font-size: 25px;
    border: none;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    &:hover{
        background-color: #608020;
    }
`
const Image = styled.img`
    width: 70%;
    height: 55%;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const PhotoWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const Serwis = () => {
    return (
        <Container>
            <Wrapper>
                <TextContainer>
                    <TextWrapper>
                        <TextTitle>SERWIS</TextTitle>
                        <hr width="100" color="yellowgreen" />
                        <TextDescription>Oferujemy kompleksową pomoc przy wszelakich naprawach bieżących, wymiany eksploatacyjne oraz montaż elementów i akcesoriów dodatkowych jak pługi czy wyciągarki, które również możecie u nas dostać! Zapewniamy terminowość i najwyższą jakość usług!</TextDescription>
                        <Link to="/contact"><Button>Kontakt</Button></Link>
                    </TextWrapper>
                </TextContainer>
                <PhotoContainer>
                    <PhotoWrapper>
                        <Image src={photo} />
                    </PhotoWrapper>
                </PhotoContainer>
            </Wrapper>
        </Container>
    )
}

export default Serwis