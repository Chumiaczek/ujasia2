import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 5vh;
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
`
const Text = styled.span`
    
`

const Copyright = () => {
    return (
        <Container>
            <Text>Copyright &copy; 2022 Quady Olecko | Powered by Chumi </Text>
        </Container>
    )
}

export default Copyright