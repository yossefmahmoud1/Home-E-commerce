import { aweicon, footer } from "../data/Data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-stone-300 pt-20 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Internal Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {footer.map((section, index) => (
              <div key={index} className="flex flex-col space-y-6">
                <h3 className="text-lg font-bold text-white tracking-wider uppercase border-b-2 border-[var(--color-primary)] pb-2 inline-block w-max">
                  {section.header}
                </h3>
                <ul className="space-y-3">
                  {section.title.map((item, subIndex) => (
                    <li key={subIndex}>
                      <a 
                        href="#" 
                        className="text-stone-400 hover:text-[var(--color-secondary)] hover:translate-x-1 transition-all duration-300 inline-block text-sm"
                      >
                        {item.subtitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-800/50 p-8 rounded-2xl shadow-xl border border-stone-800 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-2 font-display">
                Stay Inspired
              </h2>
              <p className="text-stone-400 mb-6 text-sm leading-relaxed">
                Join our community to receive exclusive design tips, new arrival alerts, and special offers.
              </p>
              
              <form className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-5 py-3.5 bg-stone-900/80 border border-stone-700 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-white placeholder-stone-500"
                  />
                </div>
                <button
                  type="button"
                  className="w-full px-6 py-3.5 bg-[var(--color-primary)] text-white font-bold tracking-wide rounded-xl hover:bg-[var(--color-primary-dark)] hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 transform active:scale-[0.98]"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <span className="text-stone-500 text-sm font-medium">Follow us on social media</span>
              <div className="flex gap-3">
                {aweicon.map((val, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-800 text-stone-400 border border-stone-700 hover:text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-base">{val.icon}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} LuxeHome. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
