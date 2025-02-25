import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { products } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHeart, faBalanceScale, faEye } from "@fortawesome/free-solid-svg-icons";
import Heading from "../Common/Header";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 lg:right-[-20px] transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md cursor-pointer hover:bg-black transition-all z-10 hidden lg:flex"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 lg:left-[-20px] transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md cursor-pointer hover:bg-black transition-all z-10 hidden lg:flex"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const Popular = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <div className="mt-16 overflow-hidden text-center relative">
      <Heading title="Top Populars" description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-100 p-4 sm:p-6">
        <div className="p-4">
          <Slider {...settings}>
            {products.slice(7, 10).map((item, index) => (
              <div key={index} className="mx-auto max-w-xs relative group">
                <div className="p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.img}
                    title={item.category}
                    alt={item.category}
                    className="mx-auto w-full h-64 object-cover rounded-md"
                  />
                  <div className="icons absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-col space-y-2">
                      <FontAwesomeIcon className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition" icon={faHeart} title="Add to Wishlist" />
                      <FontAwesomeIcon className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition" icon={faBalanceScale} title="Compare" />
                      <FontAwesomeIcon className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition" icon={faEye} title="Quick View" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="font-semibold uppercase text-gray-800">{item.name}</div>
                  <div className="text-red-600 font-bold">${item.price}</div>
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => dispatch(addToCart({ id: item.id, name: item.name, price: item.price, img: item.img, quantity: 1 }))}
                    className="bg-black text-white p-3 hover:bg-red-600 uppercase font-bold w-full rounded-lg transition"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="h-full">
          <img
            src="./img/banners/id1-img1.jpg"
            title="title"
            alt="banners"
            className="w-full h-full object-cover rounded-lg hover:shadow-xl transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Popular;
