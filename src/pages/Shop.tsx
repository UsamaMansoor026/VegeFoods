import { useState } from "react";
import { PageHeader, ProductList } from "../components";

const Shop = () => {
  const [category, setCategory] = useState<string>("all");
  return (
    <>
      <PageHeader title="Products" />
      <div className="global-padding">
        <ul className="my-10 flex justify-center items-center font-poppins">
          <li
            onClick={() => setCategory("all")}
            className={`${
              category === "all" ? "bg-primary text-white rounded-full" : ""
            } cursor-pointer text-lg px-9 py-1.5`}
          >
            All
          </li>
          <li
            onClick={() => setCategory("vegetables")}
            className={`${
              category === "vegetables"
                ? "bg-primary text-white rounded-full"
                : ""
            } cursor-pointer text-lg px-9 py-1.5`}
          >
            Vegetables
          </li>
          <li
            onClick={() => setCategory("dried")}
            className={`${
              category === "dried" ? "bg-primary text-white rounded-full" : ""
            } cursor-pointer text-lg px-9 py-1.5`}
          >
            Dried
          </li>
          <li
            onClick={() => setCategory("fruits")}
            className={`${
              category === "fruits" ? "bg-primary text-white rounded-full" : ""
            } cursor-pointer text-lg px-9 py-1.5`}
          >
            Fruits
          </li>
        </ul>

        <ProductList category={category} limit={14} />
      </div>
    </>
  );
};

export default Shop;
