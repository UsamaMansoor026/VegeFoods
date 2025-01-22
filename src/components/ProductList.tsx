import { useEffect, useState } from "react";
import { products } from "../assets/constants";
import ProductCard from "./ProductCard";

interface SingleProduct {
  id: number;
  name: string;
  image: any;
  price: number;
  discount: number;
  quantity: string;
  category: string;
}

type ProductListType = {
  limit: number;
  category?: string;
};

const ProductList = ({ limit, category = "all" }: ProductListType) => {
  const [allProducts, setProducts] = useState<any>(products);

  useEffect(() => {
    if (category === "all") {
      setProducts(products);
    } else {
      const filteredProducts = products.filter((product: SingleProduct) => {
        return product.category === category;
      });
      setProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div className="mt-16 grid xsm:grid-cols-2 md:grid-cols-3 grid-cols-4 gap-5">
      {allProducts?.length > 0 &&
        allProducts.slice(0, limit).map((product: SingleProduct) => {
          return <ProductCard key={product.id} {...product} />;
        })}
    </div>
  );
};

export default ProductList;
