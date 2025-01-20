import SectionHeading from "./SectionHeading";

/* React Slick */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../assets/constants";
import { useState } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    dots: true,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current: number) => setCurrentSlide(current),
    customPaging: (i: any) => (
      <div
        className={`w-[10px] h-[10px] my-5 ${
          i === currentSlide ? "bg-primary" : "bg-gray"
        } rounded-full`}
      ></div>
    ),
    appendDots: (dots: any) => (
      <div className="my-5">
        <ul className="flex items-center justify-center">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="global-padding">
      <SectionHeading
        subHeading="testimony"
        heading="Our satisfied customer says"
      />

      <Slider {...settings}>
        {testimonials?.length > 0 &&
          testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="font-poppins p-6 h-[330px] md:h-[320px] border-y-[0.2px] border-y-primary mt-16"
            >
              <div className="w-[100px] h-[100px] mx-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="mt-3">
                <p className="text-gray text-[14px] text-center h-[100px] xsm:h-[80px]">
                  {testimonial.testimonial}
                </p>
                <hr className="my-3 h-[1px] bg-primary border-none outline-none" />

                <h3 className="text-lg text-center font-poppins text-black capitalize">
                  {testimonial.name}
                </h3>
                <p className="uppercase tracking-[2px] text-gray font-poppins text-center text-[13px]">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
