/* Benefits Icons */
import { FaTruck, FaAward } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

/* Categories Images */
import vegetables from "../assets/category-1.webp";
import fruits from "../assets/category-2.webp";
import juices from "../assets/category-3.webp";
import dried from "../assets/category-4.webp";
import categorymain from "../assets/category.webp";

export const benefits = [
  {
    id: 1,
    title: "free shipping",
    desc: "on order over $100",
    icon: FaTruck,
    bgColor: "#e4b2d6",
  },
  {
    id: 2,
    title: "always fresh",
    desc: "product well package",
    icon: GiFruitBowl,
    bgColor: "#dcc698",
  },
  {
    id: 3,
    title: "superior quality",
    desc: "quality products",
    icon: FaAward,
    bgColor: "#a2d1e1",
  },
  {
    id: 4,
    title: "Support",
    desc: "24/7 support",
    icon: RiCustomerService2Fill,
    bgColor: "#dcd691",
  },
];

export const categoriesImages = {
  fruits,
  juices,
  vegetables,
  dried,
  categorymain,
};
