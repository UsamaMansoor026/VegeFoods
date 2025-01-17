import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-xl font-bold uppercase text-primary duration-150 hover:text-black w-[max-content] cursor-pointer"
    >
      Vege-Foods
    </Link>
  );
};

export default Logo;
