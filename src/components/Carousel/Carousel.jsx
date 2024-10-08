
import "./Carousel.css"
import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow,Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-coverflow'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { ArrowLeft, ArrowRight } from 'phosphor-react'

import {assets}from '../../assets/assets'

const Carousel = () => {
  return (
    <div className="container-xxl caro">
   <div className="container">
    <Row>
    <Col xs={12} md={8} sm={12}>
       <div className='slider-container'>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
          }}
            slidesPerView={2}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true,
               
            }}
            loop={true}
            breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400:{
                  slidesPerView:1,
                },
                639: {
                  slidesPerView: 1,
                },
                865:{
                  slidesPerView:2
                },
                1000:{
                  slidesPerView:2,
             
                },
                1500:{
                  slidesPerView:3
                },
                1700:{
                  slidesPerView:3
                }
              }}
            modules={[EffectCoverflow,Autoplay]}
        > 
            <SwiperSlide>
                <img src={assets.image1}  alt="burger" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={assets.image3} alt="burger" />
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
    <Col xs={12} md={4} sm={12}>
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
    </div>
    </div>
)
}

export default Carousel
