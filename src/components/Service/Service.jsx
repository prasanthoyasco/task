import "./Service.css"
import Slider from "react-slick";
import { assets } from "../../assets/assets";
import {slickimg} from "../../assets/assets"

const topBrandsList = [
  {
    id: 1,
    cover:slickimg.Maskimg1,
  },
  {
    id: 2,
    cover:slickimg.Maskimg2
  },
  {
    id: 3,
    cover:slickimg.Maskimg3
  },
  {
    id: 4,
    cover:slickimg.Maskimg4
  },
  {
    id: 6,
    cover:slickimg.Maskimg5
  },
  {
    id: 7,
    cover:slickimg.Maskimg1
  },
  {
    id: 8,
    cover:slickimg.Maskimg2
  },
  {
    id: 9,
    cover:slickimg.Maskimg3
  },
  {
    id: 10,
    cover:slickimg.Maskimg4
  },
];

const settings = {
  infinite: true,
 autoplay: true,
  slidesToShow: 2,
  slidesToScroll:100, 
  arrows:false,
  cssEase: "linear",
  speed: 5000,
  pauseOnHover: true,
  autoplaySpeed:1,
  responsive: [
    {
      breakpoint: 1024, // for screens <= 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600, // for screens <= 600px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]

};
const slideWrapperStyle = { 
  display: 'inline-block', 
  width: 'calc(33.33% - 20px)', // Adjust width to fit desired space
  margin: '0 10px', // Adjust margin to create space
  boxSizing: 'border-box' // Ensure padding/margin doesn't affect width
};
const Service = () => {
  return (
   <div className="container-xxl">
      <div className="box">
        <div className="bg">  
          <div className="imgslider">
      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          <div key={brand.id} style={slideWrapperStyle}>
            <div className="top-brands-cover pad">
              <img
                className="top-brands-image"
                src={brand.cover}
                alt={brand.time}
              />
            </div>
          </div>
        ))}
      </Slider>
          </div>
          <div className="left-con">        
            <div className="content-service">
            <div className="divi"></div>
            <h3 className="h33">HAVE A LOOK AT</h3>
            <h1><span>OUR </span>PORTFOLIO</h1>
            <p>Explore our diverse portfolio of high-tension electrical contracting projects, showcasing innovation, safety, and sustainability. Our dedicated team delivers tailored solutions that exceed client expectations, driving progress and fosterin sustainable development.</p>
           <div className="butn"> <a href="#">EXPLORE PORTFOLIO </a> <img src={assets.arrow} alt="arrow" /> </div>
          </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Service
