const Banner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
          <img 
            src="./img/banners/id1-img2.jpg" 
            alt="Promotional Banner" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
