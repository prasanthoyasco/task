
import "./Carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-coverflow'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { ArrowLeft, ArrowRight } from 'phosphor-react'

import {assets}from '../../assets/assets'

const Carousel = () => {
  return (
   <Container>
    <Row>
    <Col xs={12} md={7}>
       <div className='slider-container'>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
          
            modules={[EffectCoverflow]}
        >
            <SwiperSlide>
                <img src={assets.image1} alt="burger" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={assets.image2} alt="burger" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={assets.image3} alt="burger" />
            </SwiperSlide>
         
            <div className="slider-controler"></div>
        </Swiper>
    </div>
    </Col>
    <Col xs={6} md={5}>
    <div className="content">
      <h3>
      Value Engineering
      </h3>
      <div className="divider2"></div>
      <p>
      We specialise in value engineering, optimising your electrical
designs to minimise costs without compromising quality or safety.
Our team of experts identifies cost-effective alternatives and
innovative solutions to maximise the value of your investment.
      </p>
      </div>
      </Col>
    </Row>
    </Container>
)
}

export default Carousel
