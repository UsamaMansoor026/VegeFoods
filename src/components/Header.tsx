import {
  FaPhoneAlt,
  FaPaperPlane,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "../context/NavigationContext";
import LoginForm from "./AuthModel";

const Header = () => {
  const { currentLink, setCurrentLink } = useContext(NavigationContext);
  const [showMobNav, setShowMobNav] = useState<boolean>(false);

  /* This useEffect keeps track of the window width in real time */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        document.querySelector("nav ul")?.classList.remove("mobNav");
        setShowMobNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* User Context */
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

  return (
    <>
      <header className="font-poppins shadow-sm shadow-primary">
        {/* Upper Portion */}
        <div className="bg-primary text-white global-padding flex items-center justify-between py-[10px] xsm:flex-col sm:items-start md:gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-[13px]">
            <span>
              <FaPhoneAlt />
            </span>
            <span>+93 333-3333333</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-[13px]">
            <span>
              <FaPaperPlane />
            </span>
            <span>vegefoods@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-[13px] uppercase">
            <p>3-5 Business days delivery & Free Returns</p>
          </div>
        </div>

        {/* Nav Links and logo */}
        <nav className="global-padding bg-darkBg flex items-center justify-between md:py-5  overflow-x-hidden">
          <Logo />

          <ul className={` ${showMobNav ? "mobNav" : ""}`}>
            <li
              className={`${
                currentLink === "home"
                  ? "text-primary font-semibold underline"
                  : "text-black"
              } text-[12px] px-6 py-5 uppercase tracking-[1.8px] duration-150 hover:underline underline-offset-8`}
              onClick={() => {
                setCurrentLink("home");
                setShowMobNav(false);
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${
                currentLink === "about"
                  ? "text-primary font-semibold underline"
                  : "text-black"
              } text-[12px] px-6 py-5 uppercase tracking-[1.8px] duration-150 hover:underline underline-offset-8`}
              onClick={() => {
                setCurrentLink("about");
                setShowMobNav(false);
              }}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`${
                currentLink === "shop"
                  ? "text-primary font-semibold underline"
                  : "text-black"
              } text-[12px] px-6 py-5 uppercase tracking-[1.8px] duration-150 hover:underline underline-offset-8`}
              onClick={() => {
                setCurrentLink("shop");
                setShowMobNav(false);
              }}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li
              className={`${
                currentLink === "contact"
                  ? "text-primary font-semibold underline"
                  : "text-black"
              } text-[12px] px-6 py-5 uppercase tracking-[1.8px] duration-150 hover:underline underline-offset-8`}
              onClick={() => {
                setCurrentLink("contact");
                setShowMobNav(false);
              }}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex items-center gap-8">
            <Link
              to="/cart"
              className="text-xl text-primary cursor-pointer relative"
              onClick={() => setCurrentLink("cart")}
            >
              <FaShoppingCart />
              {/* Items count */}
              <span className="absolute top-[-12px] text-[10px] right-[-10px] bg-primary text-white rounded-full w-4 h-4 flex justify-center items-center">
                0
              </span>
            </Link>
            <span
              className="text-xl text-primary cursor-pointer"
              onClick={() => setShowLoginForm(true)}
            >
              <FaUser />
            </span>

            <span
              className="hidden md:block text-2xl text-primary cursor-pointer"
              onClick={() => setShowMobNav(!showMobNav)}
            >
              {showMobNav ? <IoMdClose /> : <IoMdMenu />}
            </span>
          </div>
        </nav>
      </header>

      {/* Conditional Randering of Login Form */}
      {showLoginForm && <LoginForm setShowForm={setShowLoginForm} />}
    </>
  );
};

export default Header;
