import Heading from "../Common/Heading";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaHeart, FaEye, FaBalanceScale } from "react-icons/fa";
import { products } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/WishlistSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Arrival = () => {
  const sliderRef = useRef(null);
  const [quantity] = useState(1);
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    lazyLoad: "ondemand",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const showToast = (message, type) => {
    toast.dismiss(); 
    toast[type](message, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
      style: { zIndex: 99999, marginTop: "90px", position: "fixed" }, 
    });
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    const totalPrice = quantity * product.price;
    const tempProduct = { ...product, quantity, totalPrice };
    dispatch(addToCart(tempProduct));
    showToast("✅ Added to Cart!", "success");
  };

  const handleAddToWishlist = (product) => {
    if (!product) return;
    dispatch(addToWishlist(product));
    showToast("❤️ Added to Wishlist!", "info");
  };

  return (
    <div className="p-8 text-center relative bg-gray-900 text-white z-0">
      <ToastContainer />

      <Heading title="New Arrivals" description="Discover the latest trends in our fresh collection!" />
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {products.slice(2, 8).map((product) => (
            <div key={product.id} className="mx-auto max-w-xs relative">
              <div className="group p-1 bg-gray-800 hover:bg-gray-700 hover:shadow transition-all duration-300 relative">
                <img src={product.img} alt={product.name} className="mx-auto w-full h-64 object-cover" />
                <div className="absolute top-0 right-0 transform opacity-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-2 space-y-2 md:translate-x-full md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0">
                  <FaShoppingCart onClick={() => handleAddToCart(product)} className="p-2 bg-white rounded-full text-black shadow-lg cursor-pointer hover:bg-green-500 hover:text-white transition duration-300" size={30} />
                  <FaHeart onClick={() => handleAddToWishlist(product)} className="p-2 bg-white rounded-full text-black shadow-lg cursor-pointer hover:bg-pink-500 hover:text-white transition duration-300" size={30} />
                  <FaEye className="p-2 bg-white rounded-full text-black shadow-lg cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300" size={30} />
                  <FaBalanceScale className="p-2 bg-white rounded-full text-black shadow-lg cursor-pointer hover:bg-yellow-500 hover:text-white transition duration-300" size={30} />
                </div>
              </div>
              <div className="font-semibold uppercase text-white">
                {product.name}
                <div className="text-red-500">${product.price}</div>
              </div>
            </div>
          ))}
        </Slider>
        <button
  onClick={() => sliderRef.current.slickPrev()}
  className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:bg-gray-900 hover:shadow-lg cursor-pointer hover:scale-110 hover:-translate-x-1"
  aria-label="Previous slide"
>
  <FaChevronLeft className="text-xl" />
</button>
<button
  onClick={() => sliderRef.current.slickNext()}
  className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full transition-all duration-300 cursor-pointer hover:bg-gray-900 hover:shadow-lg hover:scale-110 hover:translate-x-1"
  aria-label="Next slide"
>
  <FaChevronRight className="text-xl" />
</button>
      </div>
    </div>
  );
};

export default Arrival;
