interface SingleProduct {
  id: number;
  name: string;
  image: any;
  price: number;
  discount: number;
  quantity: string;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  discount,
  quantity,
}: SingleProduct) => {
  return (
    <article key={id} className="w-full mb-8 shadow-lg shadow-primary">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full object-cover" />
        <span className="absolute bg-primary text-white -right-5 top-5 py-1.5 px-8 uppercase text-[11px] rotate-45">
          {quantity}
        </span>

        <span className="bg-gray text-white absolute top-0 left-0 px-2 text-[10px]">
          {discount === 0 ? <></> : <>{discount}%</>}
        </span>
      </div>

      {/* Product Info */}
      <div className="font-poppins text-center">
        <h3 className="text-sm uppercase font-light tracking-[1px] my-2">
          {name}
        </h3>
        {/* Price */}
        <div className="flex items-center justify-center gap-2 text-[12px] my-3">
          {discount ? (
            <p className="line-through text-gray">{price} PKR</p>
          ) : (
            <></>
          )}
          <p className="text-primary font-semibold">
            {discount ? price - price * (discount / 100) : price} PKR
          </p>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="w-full bg-primary text-white py-1.5 duration-200 hover:shadow-lg hover:shadow-primary"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
