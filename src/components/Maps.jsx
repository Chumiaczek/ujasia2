import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 600px;
`

class MapContainer extends Component {
    render() {
        return (
            <Container>
                <Map
                    google={this.props.google}
                    style={{ width: "100%", height: "600px", position: "relative" }}
                    zoom={16}
                    initialCenter={
                        {
                            lat: 54.029107468113864,
                            lng: 22.497712540833632
                        }
                    }><Marker position={{
                        lat: 54.029107468113864,
                        lng: 22.497712540833632
                    }} /></Map>
            </Container>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBGAaHUiPWCOUel2o7i5hK8cLRb-txOEck"
})(MapContainer)