import useCart from "@/hooks/useCart";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { addItem } from "@/actions/redis";
import { Skeleton } from "./ui/skeleton";

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

export function Product({
  product: { id, imageUrl, category, title, price, description },
}: Props) {
  // const { addToCart, removeItem } = useCart();


  return (
    <div
      key={id}
      className="bg-white p-6 flex-shrink-0 flex flex-col rounded-lg shadow-md transition-all hover:shadow-lg"
    >
      <Link
        href={{
          pathname: `/product/${id}`,
        }}
      >
        <div className=" overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 h-48 w-52">
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
      <Button onClick={() => addItem(id)} className="w-full flex items-center justify-center">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white p-6 flex-shrink-0 flex flex-col rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md  h-48 w-52 mb-4">
        <Skeleton className="w-full h-full" />
      </div>
      <Skeleton className="h-4 w-1/3 mb-2" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-6 w-1/4 mb-4" />
      <Button disabled className="w-full flex items-center justify-center">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    </div>
  )
}
;
