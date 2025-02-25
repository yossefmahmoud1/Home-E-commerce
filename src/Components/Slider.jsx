
import { useRef } from "react";
import Slider from "react-slick";
import { sliderdata } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider_show = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1,    
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true,
    pauseOnHover: false, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {sliderdata.map((slide, index) => (
          <div key={index} className="w-full">
            <img
              src={slide.img}
              alt={slide.text}
              className="w-full max-w-full  aspect-ratios h-[500px] sm:h-[400px] xs:h-[300px] rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider_show;
