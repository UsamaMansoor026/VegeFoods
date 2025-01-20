import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";

import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const { setCurrentLink } = useContext(NavigationContext);
  return (
    <footer className="bg-primary text-white global-padding font-poppins py-12 grid grid-cols-4 md:grid-cols-2 xsm:grid-cols-1 gap-3">
      {/* Logo Portion */}
      <div className="xsm:text-center mb-4">
        <h3 className="text-xl font-semibold mb-2">Vege-Foods</h3>
        <p className="opacity-85 text-[13px]">100% fresh and organic foods.</p>
      </div>

      {/* Menu */}
      <ul className="xsm:text-center">
        <li className="font-semibold text-lg xsm:text-xl mb-4">Menu</li>
        <li className="footer_link">
          <Link to="/" onClick={() => setCurrentLink("home")}>
            Home
          </Link>
        </li>
        <li className="footer_link">
          <Link to="/about" onClick={() => setCurrentLink("about")}>
            About
          </Link>
        </li>
        <li className="footer_link">
          <Link to="/shop" onClick={() => setCurrentLink("shop")}>
            Shop
          </Link>
        </li>
        <li className="footer_link">
          <Link to="/contact" onClick={() => setCurrentLink("contact")}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Help */}
      <ul>
        <li className="font-semibold text-lg mb-4 xsm:text-xl xsm:text-center">
          Help
        </li>
        <li className="footer_link">
          <Link to="/">FAQs</Link>
        </li>
        <li className="footer_link">
          <Link to="/">Terms & Conditions</Link>
        </li>
        <li className="footer_link">
          <Link to="/">Privacy Policy</Link>
        </li>
        <li className="footer_link">
          <Link to="/">Shipping Information</Link>
        </li>
      </ul>

      {/* Have a Question */}
      <div>
        <h3 className="font-semibold text-lg xsm:text-xl xsm:text-center mb-4">
          Have a Questions?
        </h3>
        <div className="flex items-start xsm:justify-center gap-4 mb-2">
          <span className="text-xl mt-1">
            <FaLocationDot />
          </span>
          <p className="font-light text-sm duration-200 mb-2">
            A-159 BLOCK 12 GULISTAN-E-JOHOR, Islamabad, Pakistan
          </p>
        </div>

        {/* Phone No */}
        <div className="flex items-start xsm:justify-center gap-4 mb-2">
          <span className="mt-0.5">
            <FaPhone />
          </span>
          <p className="font-light text-sm duration-200 mb-2">
            +92 333-3333333
          </p>
        </div>

        {/* Email */}
        <div className="flex items-start xsm:justify-center gap-4 mb-2">
          <span className="text-xl mt-1">
            <IoMdMail />
          </span>
          <p className="font-light text-sm duration-200 mb-2">
            contact.vegefoods@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
