import  { useState } from "react";
import HeroSlider from "../components/Home/HeroSlider";
import PopularSkills from "../components/Home/PopularSkills";
import TopProvider from "../components/Home/TopProvider";
import HowItWorks from "../components/Home/HowItWorks";


const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="space-y-16 my-6">
      
      <HeroSlider activeSlide={activeSlide} setActiveSlide={setActiveSlide} />

      <PopularSkills />

      <TopProvider />

      <HowItWorks />
    </div>
  );
};

export default Home;