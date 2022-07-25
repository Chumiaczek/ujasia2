import { Email, Facebook, Instagram, Phone, PinDrop } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: black;
    height: 30vh;
    color: white;
    @media screen and (max-width: 768px){
        height: 60vh;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Adres = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Social = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    font-weight: 600;
    margin-bottom: 20px;
`
const Description = styled.span`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`
const Formatting = styled.span`
    margin-left: 10px;
`
const SocialWrapper = styled.div`
    display: flex;
    font-size: 2rem !important;
    justify-content: center;
`

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Contact>
                    <Title>Kontakt</Title>
                    <Description><Phone /> <Formatting>512 324 991</Formatting></Description>
                    <Description><Email /> <Formatting>jasioodziez@gmail.com</Formatting></Description>
                </Contact>
                <Adres>
                    <Title>Adres</Title>
                    <Description><PinDrop /> <Formatting>ul. Zamostowa 2</Formatting></Description>
                    <Description><PinDrop /> <Formatting>19-400 Olecko</Formatting></Description>
                </Adres>
                <Social>
                    <Title>Social media</Title>
                    <SocialWrapper>
                        <Facebook style={{ fontSize: "40px" }} />
                        <Instagram style={{ fontSize: "40px" }} className='igicon' />
                    </SocialWrapper>
                </Social>
            </Wrapper>
        </Container>
    )
}

export default Footer