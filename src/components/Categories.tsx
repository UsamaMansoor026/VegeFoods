import React, { useContext } from "react";
import { benefits, categoriesImages } from "../assets/constants";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";
import { motion } from "framer-motion";

interface benefitsProps {
  id: number;
  title: string;
  desc: string;
  icon: any;
  bgColor: string;
}

const Categories: React.FC = () => {
  const { setCurrentLink } = useContext(NavigationContext);

  return (
    <section className="global-padding py-16">
      {/* Benefits */}
      <div className="grid grid-cols-4 md:grid-cols-2 items-center gap-7">
        {benefits?.length > 0 &&
          benefits.map((item: benefitsProps, index: number) => (
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={item.id}
              className="flex flex-col justify-center items-center shadow-sm shadow-primary py-10"
            >
              <div
                className="text-darkBg w-[100px] h-[100px] rounded-full flex items-center justify-center text-[50px]"
                style={{ backgroundColor: item.bgColor }}
              >
                <item.icon />
              </div>
              <div className="text-center my-2 uppercase">
                <h3 className="font-semibold text-black text-[18px]">
                  {item.title}
                </h3>
                <span className="text-[12px] text-gray">{item.desc}</span>
              </div>
            </motion.div>
          ))}
      </div>

      {/*Food Categories */}
      <div className="grid grid-cols-3 md:grid-cols-1 gap-5 py-16">
        <div className="col-span-2 md:col-span-1 flex md:flex-col-reverse items-center md:items-stretch gap-5">
          <div className="basis-[50%] md:basis-[100%] flex flex-col gap-5">
            {/* Category 1 */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`w-full h-[250px] relative flex items-end`}
              style={{
                background: `url(${categoriesImages.vegetables})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              <Link
                to="/shop"
                className="z-[999] bg-primary text-white font-poppins py-2 px-6"
                onClick={() => setCurrentLink("shop")}
              >
                Vegetables
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`w-full h-[250px] relative flex items-end`}
              style={{
                background: `url(${categoriesImages.fruits})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              <Link
                to="/shop"
                className="z-[999] bg-primary text-white font-poppins py-2 px-6"
                onClick={() => setCurrentLink("shop")}
              >
                Fruits
              </Link>
            </motion.div>
          </div>

          {/*  */}
          <div
            className="h-full w-full basis-[50%] md:basis-[100%]"
            style={{
              background: `url(${categoriesImages.categorymain})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="z-[999] flex flex-col items-center gap-2 pt-5 md:h-[250px]">
              <h2 className="font-lora text-primary text-2xl italic">
                Vegetables
              </h2>
              <p className="text-gray text-[15px] font-poppins">
                Protect the health of every home
              </p>
              <Link
                to="/shop"
                onClick={() => setCurrentLink("shop")}
                className="bg-primary text-white border border-primary duration-200 rounded-full py-2 px-3.5 font-poppins hover:bg-transparent hover:text-primary"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {/* Category 3 */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className={`h-[250px] relative flex items-end`}
            style={{
              background: `url(${categoriesImages.juices})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            <Link
              to="/shop"
              className="z-[999] bg-primary text-white font-poppins py-2 px-6"
              onClick={() => setCurrentLink("shop")}
            >
              Juices
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className={`w-full h-[250px] relative flex items-end`}
            style={{
              background: `url(${categoriesImages.dried})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            <Link
              to="/shop"
              className="z-[999] bg-primary text-white font-poppins py-2 px-6"
              onClick={() => setCurrentLink("shop")}
            >
              Dried
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
