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

/* Products Images */
import bellPepper from "../assets/products/product-1.webp";
import strawberry from "../assets/products/product-2.webp";
import greenBeans from "../assets/products/product-3.webp";
import purpleCabbage from "../assets/products/product-4.webp";
import tomato from "../assets/products/product-5.webp";
import brocolli from "../assets/products/product-6.webp";
import carrots from "../assets/products/product-7.webp";
import fruitJuice from "../assets/products/product-8.webp";
import onion from "../assets/products/product-9.webp";
import apple from "../assets/products/product-10.webp";
import garlic from "../assets/products/product-11.webp";
import chilli from "../assets/products/product-12.webp";

/* Testimonial Users Avatars */
import personMale1 from "../assets/testimonials/person_1.webp";
import personMale2 from "../assets/testimonials/person_2.webp";
import personMale3 from "../assets/testimonials/person_3.webp";
import personMale4 from "../assets/testimonials/person_4.webp";
import personMale5 from "../assets/testimonials/person_6.webp";
import personFemale1 from "../assets/testimonials/person_5.webp";
import personFemale2 from "../assets/testimonials/person_7.webp";
import personFemale3 from "../assets/testimonials/person_8.webp";

/* Partner Brands Images */
import microsoft from "../assets/partners/microsoft.webp";
import adobe from "../assets/partners/adobe.webp";
import android from "../assets/partners/android.webp";
import google from "../assets/partners/google.webp";
import java from "../assets/partners/java.webp";

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

export const products = [
  {
    id: 1,
    name: "bell pepper",
    image: bellPepper,
    price: 450,
    discount: 10,
    quantity: "per KG",
  },
  {
    id: 2,
    name: "strawberry",
    image: strawberry,
    price: 300,
    discount: 15,
    quantity: "per KG",
  },
  {
    id: 3,
    name: "green beans",
    image: greenBeans,
    price: 150,
    discount: 0,
    quantity: "per KG",
  },
  {
    id: 4,
    name: "tomato",
    image: tomato,
    price: 250,
    discount: 0,
    quantity: "per KG",
  },
  {
    id: 5,
    name: "broccoli",
    image: brocolli,
    price: 370,
    discount: 20,
    quantity: "per KG",
  },
  {
    id: 6,
    name: "purple cabbage",
    image: purpleCabbage,
    price: 290,
    discount: 5,
    quantity: "per KG",
  },
  {
    id: 7,
    name: "fruit juice",
    image: fruitJuice,
    price: 200,
    discount: 0,
    quantity: "per bottle",
  },
  {
    id: 8,
    name: "carrots",
    image: carrots,
    price: 80,
    discount: 0,
    quantity: "per KG",
  },
  {
    id: 9,
    name: "garlic",
    image: garlic,
    price: 380,
    discount: 15,
    quantity: "per KG",
  },
  {
    id: 10,
    name: "apple",
    image: apple,
    price: 250,
    discount: 5,
    quantity: "per KG",
  },
  {
    id: 11,
    name: "chilli",
    image: chilli,
    price: 100,
    discount: 10,
    quantity: "per KG",
  },
  {
    id: 12,
    name: "onion",
    image: onion,
    price: 140,
    discount: 0,
    quantity: "per KG",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "sarah malik",
    role: "teacher",
    avatar: personFemale1,
    testimonial:
      "VegeFoods has the freshest vegetables and fruits. I love their quick delivery and excellent quality. Highly recommend it to everyone!",
  },
  {
    id: 2,
    name: "ahmed khan",
    role: "chef",
    avatar: personMale1,
    testimonial:
      "As a chef, I need top-quality produce. VegeFoods never disappoints with their fresh and organic selection. They’ve made my cooking even better!",
  },
  {
    id: 3,
    name: "Bilal rehman",
    role: "student",
    avatar: personMale2,
    testimonial:
      "Balancing studies and health isn’t easy, but VegeFoods makes it simple. Their affordable prices and fresh produce are perfect for students like me!",
  },
  {
    id: 4,
    name: "maria tariq",
    role: "teacher",
    avatar: personFemale2,
    testimonial:
      "Healthy living starts with fresh food. VegeFoods provides the best organic fruits and vegetables. Their timely delivery is a huge plus!",
  },
  {
    id: 5,
    name: "Maan Mansoor",
    role: "artist",
    avatar: personMale4,
    testimonial:
      "Creating art needs inspiration, and VegeFoods inspires healthy eating. Their fruits and vegetables are vibrant, fresh, and full of life!",
  },
  {
    id: 6,
    name: "Ali Haider",
    role: "businessman",
    avatar: personMale3,
    testimonial:
      "Busy days demand healthy meals. VegeFoods provides fresh vegetables and fruits that fit perfectly into my routine. Highly recommend their service!",
  },
  {
    id: 7,
    name: "hamza naeem",
    role: "engineer",
    avatar: personMale5,
    testimonial:
      "VegeFoods ensures I never compromise on quality. Their organic produce is always fresh, and their service is quick and reliable!",
  },
  {
    id: 8,
    name: "fatima zahra",
    role: "blogger",
    avatar: personFemale3,
    testimonial:
      "Writing about food is my passion, and VegeFoods adds value to it. Their produce makes every recipe come alive with flavor!",
  },
];

export const partners = [microsoft, adobe, android, google, java];
