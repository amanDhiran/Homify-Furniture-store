import useCart from "@/hooks/useCart";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface Props {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
  };
}

function Product({
  product: { id, imageUrl, category, title, price, description },
}: Props) {
  const { addToCart, removeItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart({ id: id, image: imageUrl, name: title, price: price, quantity: 1 });
  };

  return (
    <div
      key={id}
      className="bg-white p-6 flex-shrink-0 flex flex-col rounded-lg shadow-md transition-all hover:shadow-lg"
    >
      <Link
        href={{
          pathname: `/product/${id}`,
          query: {
            title,
            imageUrl,
            category,
            price,
            description,
          },
        }}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 h-44">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain mb-4 rounded"
          />
        </div>
        <p className="text-gray-600 mb-2">{category}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-xl font-bold mb-4">${price.toFixed(2)}</p>
      </Link>
      <Button onClick={handleAddToCart} className="w-full flex items-center justify-center">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </div>
  );
}

export default Product;
