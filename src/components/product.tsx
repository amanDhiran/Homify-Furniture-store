import useCart from "@/hooks/useCart"
import Link from "next/link"

interface Props {
    product: {
      id:          string      
      title:       string
      description: string
      price:       number
      imageUrl:    string
      category:    string
        }
}

function Product({
    product: {id, imageUrl, category, title, price, description}
} : Props ) {

  const {addToCart, removeItem} = useCart()

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent the Link's click event from being triggered
    addToCart({ id: id, name: title, price: price, quantity: 1 });
  };

  return (
    <div className="flex-shrink-0 border border-slate-400/20 bg-white rounded-lg flex flex-col w-72">
              <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img className="h-full w-full object-contain lg:h-full lg:w-full" src={`${imageUrl}`} alt="" />
              </div>
              <div className="px-5  pt-2 md:pb-5 pb-2 flex gap-7 flex-col">
                <div>
                  <p className="text-slate-500 text-xs">{category}</p>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="mt-2 text-gray-800 ">{description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className=" font-semibold">${price}</p>
                  <button onClick={handleAddToCart} className="px-3 bg-slate-200/40 hover:bg-black/20 transition-all duration-300 ease-in-out rounded-full py-2">Add to cart</button>
                </div>
              </div>
    </div>
  )
}

export default Product