const Slider = ({
  imgSrc,
  badgeText,
  slideTitle,
  slideDescription,
  slideCTA,
}) => {
  return (
    <div className="relative w-full h-full">
      <img
        src={imgSrc}
        className="w-full h-full object-cover brightness-[0.35]"
        alt={slideTitle}
      />

      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white max-w-2xl space-y-4">
        <span className="badge badge-primary font-bold tracking-widest uppercase px-4 py-3">
          {badgeText}
        </span>

        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          {slideTitle}
        </h1>

        <p className="text-lg text-white/80 font-medium">
          {slideDescription}
        </p>

        <a href="#skills-section" className="btn btn-primary px-8 shadow-lg">
          {slideCTA}
        </a>
      </div>
    </div>
  );
};
export default Slider;