import { Link } from "react-router-dom";
import bg from "../assets/category-1.webp";
import { useContext, useEffect } from "react";
import { NavigationContext } from "../context/NavigationContext";

interface pageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: pageHeaderProps) => {
  const { setCurrentLink } = useContext(NavigationContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="py-[12em] relative"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="font-poppins z-50 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <p className="text-center text-white uppercase">
          <Link
            to="/"
            onClick={() => setCurrentLink("home")}
            className="underline"
          >
            Home
          </Link>{" "}
          {`>`} {title}
        </p>

        <h3 className="text-center text-white text-3xl font-bold uppercase mt-3">
          {title}
        </h3>
      </div>
    </section>
  );
};

export default PageHeader;
