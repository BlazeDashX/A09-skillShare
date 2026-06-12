import Slider from "./Slider";
import { useState, useEffect } from "react";

const HeroSlider = () => {
    const [slides, setSlides] = useState([]);
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        fetch("/slides.json")
            .then((res) => res.json())
            .then((data) => setSlides(data))
            .catch((err) => console.error("Error fetching slides:", err));
    }, []);

    const totalSlides = slides.length;

    const prevSlide = () => {
        setActiveSlide(activeSlide === 1 ? totalSlides : activeSlide - 1);
    };

    const nextSlide = () => {
        setActiveSlide(activeSlide === totalSlides ? 1 : activeSlide + 1);
    };

    if (!slides.length) return null;

    return (
        <div className="carousel w-full h-100 md:h-125 rounded-3xl overflow-hidden relative shadow-2xl">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${activeSlide === index + 1 ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Slider
                        imgSrc={slide.imgSrc}
                        badgeText={slide.badgeText}
                        slideTitle={slide.slideTitle}
                        slideDescription={slide.slideDescription}
                        slideCTA={slide.slideCTA}
                    />
                </div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 flex justify-between z-20">
                <button
                    onClick={prevSlide}
                    className="btn btn-circle btn-black/50 border-none text-black hover:text-white hover:bg-black/80"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="btn btn-circle btn-black/50 border-none text-black hover:text-white hover:bg-black/80"
                >
                    ❯
                </button>
            </div>

            {/* Dot Pagination */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index + 1)}
                        className={`w-3 h-3 rounded-full transition-all ${activeSlide === index + 1 ? "bg-primary w-8" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;