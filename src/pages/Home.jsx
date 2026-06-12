import  { useState } from "react";
import HeroSlider from "../components/Home/HeroSlider";


const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="space-y-16 my-6">
      

      <HeroSlider activeSlide={activeSlide} setActiveSlide={setActiveSlide} />



    </div>
  );
};

export default Home;