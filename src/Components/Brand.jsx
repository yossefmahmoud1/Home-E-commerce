import { brand } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NextArrow = ({ onClick, className, style }) => (
  <div
    className={`${className} hidden lg:flex absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md cursor-pointer hover:bg-black transition-all z-10`}
    onClick={onClick}
    style={{ ...style, display: "block" }}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = ({ onClick, className, style }) => (
  <div
    className={`${className} hidden lg:flex absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md cursor-pointer hover:bg-black transition-all z-10`}
    onClick={onClick}
    style={{ ...style, display: "block" }}
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const Brand = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          arrows: false, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          arrows: false, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1.5,
          arrows: false, 
        },
      },
      {
        breakpoint: 360, 
        settings: {
          slidesToShow: 1,
          arrows: false, 
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-10 px-4 sm:px-10">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-5">
        Our Trusted Brands
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {brand.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-28 sm:w-36 md:w-48 lg:w-64 p-2 sm:p-4">
                <img
                  src={item.brand}
                  title={item.category}
                  alt={item.category}
                  className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
