import Heading from "../Common/Heading";
import { FaShippingFast, FaUndoAlt, FaHeadset, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  const featuresList = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over $500. We deliver worldwide with secure packaging.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <FaUndoAlt />,
      title: "30 Days Return",
      description: "Not satisfied? Return it within 30 days for a full refund or exchange, no questions asked.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any inquiries.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      description: "We ensure 100% secure payment with 256-bit encryption for all transactions.",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading 
          title="Why Shop With Us?" 
          description="We provide the best customer experience with top-notch services." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${feature.color} transition-transform duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
