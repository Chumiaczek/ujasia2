import React from 'react'
import styled from 'styled-components'
import background from '../assets/background/quadBackground.jpeg'
import CountUp from 'react-countup'

const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url(${background});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: white;
    @media screen and (max-width: 1250px){
        height: 100vh;
    }
`
const Overlay = styled.div`
    background-color: #111111bc;
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1250px){
        flex-direction: column;
    }
`
const StatisticContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StatisticNumber = styled.h1`
    font-size: 80px;
    font-weight: 500;
    margin-block-end: 0;
    margin-inline-end: 0;
    margin-block-start: 0;
    margin-inline-start: 0;
    padding: 0;
`
const StatisticDescription = styled.h2`
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
`

export default function Statistics() {
    return (
        <Container>
            <Overlay>
                <Wrapper>
                    <CountUp
                        start={0}
                        end={8}
                        duration={2}
                        delay={0}
                        enableScrollSpy={true}
                    >
                        {({ countUpRef }) => (
                            <StatisticContainer>
                                <StatisticNumber ref={countUpRef}></StatisticNumber>
                                <StatisticDescription>Lat Na Rynku</StatisticDescription>
                                <hr width="100" color="yellowgreen" />
                            </StatisticContainer>
                        )}
                    </CountUp>
                </Wrapper>
            </Overlay>
        </Container >
    )
}
