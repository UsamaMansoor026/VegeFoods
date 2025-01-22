import { Route, Routes } from "react-router-dom";
import { About, Cart, Contact, Home, Shop } from "./pages";
import { Footer, Header } from "./components";

import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Scroll To Top Button */}
      {isVisible && (
        <div
          className="bg-primary text-white text-2xl fixed bottom-5 right-5 z-50 p-4 rounded-full cursor-pointer hover:shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <IoIosArrowUp />
        </div>
      )}
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
