import type { Product } from "@/types/product.interface";

const ProductCard = ({ product }: { product: Product }) => {
  const { category, imageUrl, name, price } = product;

  return (
    <div className="bg-white">
      <div className="w-full h-[210px] md:rounded-lg sm:rounded-md rounded-[0.25rem] overflow-hidden">
        <img
          className="w-full h-[210px] hover:scale-110 transition-all mb-0.5 object-cover"
          src={imageUrl || "https://placehold.co/600x400"}
          alt={name}
        />
      </div>
      <div className="sm:p-2 p-1.5">
        <span className="font-normal text-sm text-neutral-700 line-clamp-1 leading-5 mb-0.5 block">
          {category || ""}
        </span>
        <a
          href="#"
          className="hover:cursor-pointer font-medium text-base text-neutral-900 leading-[22px] line-clamp-2 mb-2"
        >
          {product?.name || ""}
        </a>
        <p className="font-medium text-[var(--primary)] sm:text-xl text-lg leading-8">
          ${price?.toFixed(2) || "0.00"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
