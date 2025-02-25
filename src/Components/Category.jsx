import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { category } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-6">
      {/* عرض العناصر ثابت في الشاشات الكبيرة */}
      <div className="hidden lg:flex lg:flex-wrap lg:justify-between gap-4 px-4">
        {category.map((item, index) => (
          <div
            key={index}
            className="w-[13%] bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <img src={item.img} alt={item.category} className="w-24 h-24 object-contain mb-2" />
            <p className="text-lg font-semibold  text-red-500">{item.category}</p>
          </div>
        ))}
      </div>

      {/* السلايدر للشاشات الصغيرة والمتوسطة فقط */}
      <div className="lg:hidden relative">
        <Slider ref={sliderRef} {...settings}>
          {category.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <img src={item.img} alt={item.category} className="w-24 h-24 object-contain mb-2" />
                <p className="text-lg font-semibold text-red-500">{item.category}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* الأسهم تعمل الآن بشكل صحيح عند النقر */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="lg:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:scale-110 hover:-translate-x-1"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="lg:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:scale-110 hover:translate-x-1"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Category;
