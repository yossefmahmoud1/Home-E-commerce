import React from "react";
import Heading from "../Common/Heading";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Get in Touch" description="We are here to help you." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start animate-fadeIn">
          
          {/* Contact Info Side */}
          <div className="bg-[var(--color-background)] p-8 rounded-3xl space-y-8 h-full">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            <p className="text-gray-600 leading-relaxed">
              Have questions about our products, shipping, or anything else? Fill out the form and our team will be in touch shortly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Us</h4>
                  <p className="text-gray-500 text-sm">21 W. 46th St., New York, USA</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-500 text-sm">hello@luxehome.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-xl shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="name@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="Product Inquiry" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[var(--color-primary-dark)] hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
