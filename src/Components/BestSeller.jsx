import { useState } from "react";
import Heading from "../Common/Heading";
import ProductCard from "./ProductCard";
import { products } from "../data/Data";

const BestSeller = () => {
  const [menuItem, setMenuItem] = useState(products);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterItems = (name) => {
    setActiveCategory(name);
    if (name === "all") {
      setMenuItem(products);
    } else {
      const newItems = products.filter((item) => item.name === name);
      setMenuItem(newItems);
    }
  };

  const categories = ["all", "DECOR", "KITCHEN", "LIVING ROOM", "SOFA"];

  return (
    <section className="py-16 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          title="Best Sellers"
          description="Top picks our customers love the most."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterItems(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeCategory === category
                  ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {category.toLowerCase()}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItem.map((item, index) => (
            <div key={index} className="animate-fadeIn">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
