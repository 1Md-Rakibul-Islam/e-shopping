import type { Product } from "../../../types/product.interface";

const ProductCard = ({ product }: { product: Product }) => {
  const { category, imageUrl, description, name, price } = product;

  return (
    <div className="md:rounded-lg sm:rounded-md rounded-[0.25rem]">
      <img
        className="w-full h-[210px] hover:scale-110 transition-all mb-0.5 object-cover"
        src={imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
        alt={name}
      />
      <div className="sm:p-2 p-1.5 bg-white">
        <span className="font-normal text-sm text-neutral-700 line-clamp-1 leading-5 mb-0.5 block">
          {category || ""}
        </span>
        <h3 className="font-medium text-base text-neutral-900 leading-[22px] line-clamp-2 mb-2">
          {description || ""}
        </h3>
        <p className="text-primary">${price?.toFixed(2) || "0.00"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
