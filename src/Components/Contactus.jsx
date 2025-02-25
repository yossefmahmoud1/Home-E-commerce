import React from "react";

const ContactUs = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="./img/banners/id1-banner2.jpg"
          alt="Store Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-white text-center max-w-2xl p-8">
        <h4 className="uppercase text-2xl mb-4">Hello Customer!</h4>
        <h2 className="uppercase text-5xl font-bold mb-6">Visit Our Store</h2>
        <div className="text-xl font-normal mb-6">
          <p className="mb-2">📍 21 W. 46th St., New York, United States</p>
          <p className="mb-2">📧 yosefmahmoudd51@gmail.com</p>
          <p>+202 011895362514597</p>
        </div>
        <button
          type="button"
          className="bg-red-500 hover:bg-white hover:text-black py-3 px-6 uppercase text-xl font-semibold transition-all duration-300 shadow-md"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
