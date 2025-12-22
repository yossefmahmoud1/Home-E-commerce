import Heading from "../Common/Heading";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Interior Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The quality of furniture from LuxeHome is unmatched. My clients are always thrilled with the modern designs and durability.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Homeowner",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Customer service was fantastic! They helped me choose the perfect sofa for my small apartment. Highly recommended!",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Architect",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      text: "Fast delivery and easy assembly. The wood finish is exactly as shown on the website. Will definitely buy again.",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="What Our Clients Say" description="Real feedback from happy customers." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative hover:-translate-y-2 transition-transform duration-300">
              <FaQuoteLeft className="text-4xl text-[var(--color-primary)] opacity-20 absolute top-6 left-6" />
              
              <div className="flex items-center gap-2 mb-4 text-yellow-400 mt-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>

              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-[var(--color-primary)] font-semibold uppercase">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
