import { NewsLetter, PageHeader, Testimonials } from "../components";
import aboutImg from "../assets/about.webp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { FaPlay } from "react-icons/fa";

const About = () => {
  const { setCurrentLink } = useContext(NavigationContext);
  return (
    <>
      <PageHeader title="About Us" />

      <section className="global-padding md:p-0 grid grid-cols-2 md:grid-cols-1 mb-3">
        <div
          className="w-[85%] md:w-full md:aspect-[16/9] flex justify-center items-center"
          style={{
            background: `url(${aboutImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[100px] h-[100px] xsm:w-[70px] xsm:h-[70px] bg-primary rounded-full flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-primary">
            <FaPlay className="text-white text-3xl xsm:text-xl" />
          </div>
        </div>

        <div className="font-poppins w-full mt-10 md:px-14 xsm:px-6">
          <h1 className="text-[40px] xsm:text-3xl text-black font-semibold mb-5">
            Welcome to VegeFoods an eCommerce Website
          </h1>

          <p className="text-gray text-[15px] mb-4 leading-[1.8] xsm:text-[13px]">
            At VegeFoods, we take pride in offering fresh, organic produce
            sourced from trusted local farmers. Our commitment lies in
            delivering nutrient-rich fruits, vegetables, and natural products
            straight to your home, ensuring quality and sustainability every
            step of the way. With a focus on health and wellness, we aim to make
            fresh food accessible, convenient, and enjoyable for all.
          </p>
          <p className="text-gray text-[15px] mb-4 leading-[1.8] xsm:text-[13px]">
            Through our easy-to-use e-commerce platform, VegeFoods connects
            families with nature's best offerings. Whether you're searching for
            crisp greens or seasonal fruits, our products reflect a dedication
            to freshness and eco-friendly practices. Together, let's embrace a
            healthier lifestyle while supporting sustainable farming and a
            greener tomorrow.
          </p>

          <Link
            to="/shop"
            onClick={() => setCurrentLink("shop")}
            className="text-white bg-primary rounded-full px-4 py-1.5 mt-2 duration-100 hover:shadow-lg hover:shadow-primary"
          >
            Shop Now
          </Link>
        </div>
      </section>
      <NewsLetter />
      <Testimonials />
      <div className="mt-32"></div>
    </>
  );
};

export default About;
