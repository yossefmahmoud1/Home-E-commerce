import { useState } from "react";
import Heading from "../Common/Heading";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 3-5 business days for domestic orders. International shipping may take 7-14 days depending on location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it for a full refund or exchange within 30 days."
    },
    {
      question: "Do you offer warranty on furniture?",
      answer: "Yes, all our furniture comes with a 1-year manufacturer warranty covering defects in materials and workmanship."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order is shipped, we will send you a tracking number via email so you can monitor its progress."
    },
    {
      question: "Do you offer assembly services?",
      answer: "We offer premium white-glove delivery service which includes assembly for an additional fee in select zip codes."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Frequently Asked Questions" description="Got questions? We have answers." />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'shadow-md border-[var(--color-primary)]' : 'hover:border-gray-300'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-white focus:outline-none"
              >
                <span className={`font-bold text-lg ${activeIndex === index ? 'text-[var(--color-primary)]' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full ${activeIndex === index ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {activeIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
