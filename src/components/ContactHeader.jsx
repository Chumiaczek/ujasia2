import React, { useEffect } from 'react'
import styled from 'styled-components'
import background from '../assets/background/contactbackground.webp'
import AOS from 'aos'
import "aos/dist/aos.css";

const Container = styled.div`
    height: 40vh;
    width: 100%;
    background-image: url(${background});
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const Overlay = styled.div`
    background-color: #111111d3;
    height: 100%;
    width: 100%;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
    font-size: 80px;
`
const Description = styled.h2`
    margin-top: 20px;
    font-size: 25px;
`

const ContactHeader = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <Container>
            <Overlay>
                <Wrapper>
                    <Title>KONTAKT</Title>
                    <hr width="200" color="yellowgreen" />
                    <Description>Skontaktuj się z nami!</Description>
                </Wrapper>
            </Overlay>
        </Container>
    )
}

export default ContactHeader