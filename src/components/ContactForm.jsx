import { Email, Facebook, Instagram, Phone, PinDrop } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #111;
    color: white;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SocialMediaContainer = styled.div`
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #1d1d1d;
    border-radius: 5px;
    box-shadow: 0 0 10px #1a1919;
`
const SocialMediaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Title = styled.h1`
    
`
const ButtonsWrapper = styled.div`
    
`
const ContactContainer = styled.div`
    padding: 10px 0 10px 0;
    width: 80%;
`
const ContactWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
`
const Contact = styled.div`
    width: 300px;
    height: 300px;
    background-color: #1d1d1d;
    border-radius: 5px;
    box-shadow: 0 0 10px #1a1919;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`
const ContactTitle = styled.h1`
    margin-top: 20px;
    color: yellowgreen;
`
const ContactDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`
const ContactDescription = styled.span`
    text-align: center;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const ContactStyling = styled.span`
    margin-left: 10px;
`

const ContactForm = () => {
    return (
        <Container>
            <Wrapper>
                <SocialMediaContainer>
                    <SocialMediaWrapper>
                        <Title>Zobacz nasze Social Media:</Title>
                        <ButtonsWrapper>
                            <a href="https://www.facebook.com/profile.php?id=100063685985085" target="_blank" rel="noreferrer"><Facebook style={{ fontSize: "50px", cursor: "pointer" }} /></a>
                            <a href="https://www.instagram.com/quady_olecko/" target="_blank" rel="noreferrer"><Instagram style={{ fontSize: "50px", cursor: "pointer" }} /></a>
                        </ButtonsWrapper>
                    </SocialMediaWrapper>
                </SocialMediaContainer>
                <ContactContainer>
                    <ContactWrapper>
                        <Contact>
                            <ContactTitle>Kontakt</ContactTitle>
                            <ContactDescriptionWrapper>
                                <ContactDescription><Phone /> <ContactStyling>512 324 991</ContactStyling></ContactDescription>
                                <ContactDescription><Email /> <ContactStyling>jasioodziez@gmail.com</ContactStyling></ContactDescription>
                            </ContactDescriptionWrapper>
                        </Contact>
                        <Contact>
                            <ContactTitle>Adres</ContactTitle>
                            <ContactDescriptionWrapper>
                                <ContactDescription><PinDrop /> <ContactStyling>ul. Zamostowa 2</ContactStyling></ContactDescription>
                                <ContactDescription><PinDrop /> <ContactStyling>19-400 Olecko</ContactStyling></ContactDescription>
                            </ContactDescriptionWrapper>
                        </Contact>
                    </ContactWrapper>
                </ContactContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactForm