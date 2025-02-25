import { aweicon, footer } from "../data/Data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-white text-black py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-wrap justify-center md:justify-start">
          {footer.map((value, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 mb-6 text-center md:text-left">
              <div className="text-lg font-semibold mb-3">{value.header}</div>
              <div className="flex flex-col space-y-2">
                {value.title.map((item, subIndex) => (
                  <span
                    key={subIndex}
                    className="hover:text-red-500 cursor-pointer transition duration-300"
                  >
                    {item.subtitle}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-green-500 rounded-lg shadow-lg text-white max-w-md mx-auto w-full">
          <h1 className="uppercase text-2xl font-semibold mb-4 text-center">
            Sign up for new collection
          </h1>
          <p className="mb-4 text-center">
            Don’t miss our exclusive and exciting offers, available for a limited time!
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full sm:w-2/3 p-3 border-none rounded-md focus:outline-none text-black mb-4 sm:mb-0"
            />
            <button
              type="button"
              className="bg-black text-white px-5 py-3 rounded-md hover:bg-red-500 transition duration-300 w-full sm:w-auto"
            >
              SUBSCRIBE
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-3">
            {aweicon.map((val, index) => (
              <motion.div
                key={index}
                className="bg-white flex items-center justify-center w-12 h-12 text-2xl rounded-full cursor-pointer transition-all duration-300 group hover:bg-black shadow-md"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <span className="text-black group-hover:text-white">{val.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
