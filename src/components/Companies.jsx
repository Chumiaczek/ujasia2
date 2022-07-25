import React from 'react'
import styled from 'styled-components'
import cfmoto from '../assets/companies/cfmoto.webp'
import alfarad from '../assets/companies/alfarad.webp'
import kxd from '../assets/companies/kxd.webp'
import linhai from '../assets/companies/linhai.webp'
import segway from '../assets/companies/segway.webp'
import tgb from '../assets/companies/tgb.webp'

const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-color: white;
    @media screen and (max-width: 1250px){
        height: 60vh;
    }
    @media screen and (max-width: 768px){
        display: none;
    }
    
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 230px;
`
const Image = styled.img`
    width: 230px;
    height: 230px;
    filter: contrast(0);
    transition: 0.2s all ease-in-out;
    &:hover{
        filter: contrast(100%);
        width: 200px;
        height: 200px;
    }
`

const Companies = () => {
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={cfmoto} />
                </ImageContainer>
                <hr size="250" color="grey" />
                <ImageContainer>
                    <Image src={tgb} />
                </ImageContainer>
                <hr size="250" color="grey" />
                <ImageContainer>
                    <Image src={alfarad} />
                </ImageContainer>
                <hr size="250" color="grey" />
                <ImageContainer>
                    <Image src={segway} />
                </ImageContainer>
                <hr size="250" color="grey" />
                <ImageContainer>
                    <Image src={kxd} />
                </ImageContainer>
                <hr size="250" color="grey" />
                <ImageContainer>
                    <Image src={linhai} />
                </ImageContainer>
            </Wrapper>
        </Container>
    )
}

export default Companies