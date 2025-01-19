import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import SectionHeading from "./SectionHeading";
import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

const Products = () => {
  const { setCurrentLink } = useContext(NavigationContext);
  return (
    <div className="pb-16 global-padding">
      <SectionHeading heading="Our Products" subHeading="Featured Products" />
      <p className="text-center text-gray font-poppins my-4 max-w-[60%] md:max-w-[80%] mx-auto">
        Explore our handpicked selection of fresh, organic, and sustainably
        sourced vegetables and fruits, delivered straight from farm to table
      </p>

      <ProductList limit={8} />

      <div className="flex justify-center">
        <Link
          to="/shop"
          onClick={() => setCurrentLink("shop")}
          className="w-[200px] text-center text-white py-3 rounded-full bg-primary uppercase text-[13px] font-poppins font-semibold border border-primary duration-200 hover:bg-transparent hover:text-primary"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Products;
