import { products } from "../assets/constants";
import ProductCard from "./ProductCard";

interface SingleProduct {
  id: number;
  name: string;
  image: any;
  price: number;
  discount: number;
  quantity: string;
}

type ProductListType = {
  limit: number;
};

const ProductList = ({ limit }: ProductListType) => {
  return (
    <div className="mt-16 grid xsm:grid-cols-2 md:grid-cols-3 grid-cols-4 gap-5">
      {products?.length > 0 &&
        products.slice(0, limit).map((product: SingleProduct) => {
          return <ProductCard key={product.id} {...product} />;
        })}
    </div>
  );
};

export default ProductList;
