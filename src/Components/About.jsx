import Heading from "../Common/Heading";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="About Us" description="We are redefining modern living." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative rounded-3xl overflow-hidden shadow-xl animate-scaleIn">
            <img src="/img/Hero/Heroimg3.jpg" alt="About Us" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Crafting Comfort Since 2010</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              At LuxeHome, we believe that furniture is more than just functional objects; it's an expression of your personality and a foundation for your lifestyle. 
              Our journey began with a simple mission: to make high-quality, stylish furniture accessible to everyone.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We collaborate with world-class designers and skilled artisans to create pieces that blend timeless elegance with modern utility. 
              Whether you're furnishing a new home or updating a single room, we are here to help you tell your story.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100 mt-6">
              <div className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-[var(--color-secondary)] hover:text-white transition-colors duration-300">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">15+</div>
                <div className="text-sm text-gray-500 font-medium">Years</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-[var(--color-secondary)] hover:text-white transition-colors duration-300">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">20k+</div>
                <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-[var(--color-secondary)] hover:text-white transition-colors duration-300">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">500+</div>
                <div className="text-sm text-gray-500 font-medium">Designs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
