import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react' // SwiperSlide é referente a cada item do slide
import styled from "styled-components";

const CarouselContainer = styled.section`
    background-color: #000;
    color: #FFF;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
        width: 21%;
        text-align: end;
    }
`

const StyledSwiper = styled(Swiper)`
    width: 94%;  

    img{
        width: 14.2vw;
        margin: 0 2vw;
    }   
`

export default function CarouselUltimosLançamentos () {
   
    const [filmesCarousel, setFilmesCarousel] = useState([])

   async function pegarDados () {
    const Dados = await axios.get(`https://api.sampleapis.com/movies/family`)

    try{
        setFilmesCarousel(Dados.data)
    }catch(erro){
        alert(`Desculpe, ocorreu um erro ${erro}`)
    }
   }

   useEffect(() => {
    pegarDados()
   }, [])
   
    return (
        <CarouselContainer>
            <h2>Últimos Lançamentos</h2>
                <StyledSwiper
                    slidesPerView={5} 
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}>
                        {filmesCarousel.map((item)=>(
                            <SwiperSlide>
                                <img src={item.posterURL} alt="" />
                            </SwiperSlide>
                        ))}
                </StyledSwiper>
        </CarouselContainer>
    )
}