import React from 'react'
import styled from 'styled-components'
import background from "../assets/hangar.webp"
import { NewItems } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    color: white;
    
`
const Overlay = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #111111b2;
    justify-content: center;
    align-items: space-around;
    position: relative;
    flex-direction: column;
`
const Image = styled.img`
    width: 70% !important;
`
const SlideBackground = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    background-color: #111111ca;
    height: 700px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    
`
const Price = styled.h2`
    color: greenyellow;
`
const MainTitle = styled.h1`
    font-size: 60px;
    text-align: center;
    color: yellowgreen;
    font-weight: bold;
`
const SwiperWrapper = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: space-between;
`
const NewOffer = () => {
    return (
        <Container>
            <Overlay>
                <MainTitle>NOWOŚCI</MainTitle>
                <SwiperWrapper>
                    <Swiper slidesPerView={1}
                        breakpoints={{
                            1663: {
                                slidesPerView: 3
                            },
                            1120: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            }
                        }}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper">

                        {NewItems.map((item) => (
                            <SwiperSlide>
                                <SlideBackground>
                                    <SlideWrapper>
                                        <Image src={item.img} />
                                        <Title>{item.title}</Title>
                                        <Price>{item.price} zł</Price>
                                    </SlideWrapper>
                                </SlideBackground>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </SwiperWrapper>
            </Overlay>
        </Container>
    )
}

export default NewOffer