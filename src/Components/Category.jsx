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
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-16 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Arrows */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Shop by Category</h2>
            <p className="text-gray-500">Explore our curated collections</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="-mx-3">
          <Slider ref={sliderRef} {...settings}>
            {category.map((item, index) => (
              <div key={index} className="px-3">
                <div className="group bg-white border border-gray-100 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-secondary)]">
                  <div className="bg-stone-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-stone-100">
                    <img 
                      src={item.img} 
                      alt={item.category} 
                      className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                    {item.category}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Category;
