import { sliderdata } from "../data/Data";

const Slider_show = () => {
  // Use the first image from the data as the static hero
  const heroImage = sliderdata[0];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
        <img
          src={heroImage.img}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for better text contrast if we add text later */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
};

export default Slider_show;
