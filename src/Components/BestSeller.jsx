import { products } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Category = () => {
  const [menuItem, setMenuItem] = useState(products);

  const filterItems = (name) => {
    if (name === "all") {
      setMenuItem(products);
    } else {
      const newItems = products.filter((item) => item.name === name);
      setMenuItem(newItems);
    }
  };

  return (
    <div className="bg-white mt-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
      <Heading
        title="Best Seller"
        description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY"
      />
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-5">
        {["all", "DECOR", "KITCHEN", "LIVING ROOM", "SOFA"].map((category) => (
          <button
            key={category}
            className="bg-gray-200 py-1.5 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm md:text-base text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded-md"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 sm:p-5">
        {menuItem.map((item, index) => (
          <div key={index} className="relative bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="relative group">
              <img
                src={item.img}
                title={item.name}
                alt={item.name}
                className="h-52 sm:h-64 w-full object-cover rounded-md"
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
                {[
                  { icon: "shopping-cart", title: "Add to cart" },
                  { icon: "heart", title: "Add to wishlist" },
                  { icon: "balance-scale", title: "Compare" },
                  { icon: "eye", title: "View" },
                ].map((action, i) => (
                  <FontAwesomeIcon
                    key={i}
                    className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition"
                    title={action.title}
                    icon={action.icon}
                  />
                ))}
              </div>
            </div>
            {/* معلومات المنتج */}
            <div className="mt-3 sm:mt-4 text-center">
              <div className="text-sm sm:text-lg font-semibold uppercase">{item.name}</div>
              <div className="text-blue-800 font-bold text-sm sm:text-base">${item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
