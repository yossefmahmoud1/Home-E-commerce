const Heading = ({ title, description }) => {
  return (
    <div className="text-center mb-8 animate-fadeIn">
      <h1 className="text-4xl font-extrabold uppercase text-gray-800 relative inline-block pb-2">
        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          {title}
        </span>
        <span className="absolute left-1/2 bottom-0 w-16 h-1 bg-orange-500 transform -translate-x-1/2"></span>
      </h1>
      <p className="text-gray-600 text-lg mt-3">{description}</p>
    </div>
  );
};

export default Heading;
