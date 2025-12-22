const Heading = ({ title, description }) => {
  return (
    <div className="text-center mb-10 animate-fadeIn px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block pb-3 mb-3">
        {title}
        <span className="absolute left-1/2 bottom-0 w-24 h-1 bg-[var(--color-primary)] transform -translate-x-1/2 rounded-full"></span>
      </h2>
      {description && <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">{description}</p>}
    </div>
  );
};

export default Heading;
