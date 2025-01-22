import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import SplitText from "./SplitText";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    beforeChange: (_: any, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const handleAnimationComplete = () => console.log("Animation Completed");

  return (
    <div className="overflow-x-hidden">
      <Slider {...sliderSettings}>
        <section
          className={`${
            currentSlide === 0 ? "fade-in" : ""
          } h-[600px] relative bg-no-repeat bg-cover bg-center bg-[url('./bg_1.webp')]`}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="heroSlide-content">
            <SplitText
              text="We Serve Fresh vegetables & fruits"
              textAlign="center"
              className="font-amaticsSC text-[8vw] leading-[1.3] mb-2 text-white whitespace-nowrap uppercase"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            {/* <h1 className="font-amaticsSC text-[8vw] leading-[1.3] mb-2 text-white whitespace-nowrap uppercase">
              We Serve Fresh vegetables & fruits
            </h1> */}
            <h2 className="text-[12px] text-white font-poppins uppercase font-light tracking-[4px] mb-4 whitespace-nowrap">
              we deliver organic vegetables & fruits
            </h2>
            <button
              type="button"
              className="text-base text-white font-poppins border border-primary bg-primary rounded-full px-3 py-1.5 cursor-pointer hover:bg-transparent hover:text-primary duration-200"
            >
              View Details
            </button>
          </div>
        </section>

        <section
          className={`${
            currentSlide === 1 ? "fade-in" : ""
          } h-[600px] relative bg-no-repeat bg-cover bg-center bg-[url('./bg_2.webp')]`}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="heroSlide-content">
            <SplitText
              text="100% fresh & organic fruits"
              textAlign="center"
              className="font-amaticsSC text-[8vw] leading-[1.3] mb-2 text-white whitespace-nowrap uppercase"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            {/* <h1 className="font-amaticsSC text-[8vw] leading-[1.3] mb-2 text-white whitespace-nowrap uppercase">
              100% fresh & organic fruits
            </h1> */}
            <h2 className="text-[12px] text-white font-poppins uppercase font-light tracking-[4px] mb-4 whitespace-nowrap">
              we deliver organic vegetables & fruits
            </h2>
            <button
              type="button"
              className="text-base text-white font-poppins border border-primary bg-primary rounded-full px-3 py-1.5 cursor-pointer hover:bg-transparent hover:text-primary duration-200"
            >
              View Details
            </button>
          </div>
        </section>
      </Slider>
    </div>
  );
};

export default Hero;
