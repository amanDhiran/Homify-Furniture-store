import Link from "next/link"

interface Props {
    product: {
        id: number ; 
        thumbnail: string,
        category: string,
        title: string,
        price: number
        }
}

function Product({
    product: {id, thumbnail, category, title, price}
} : Props ) {
  return (
    <Link href={
        {
            pathname: `/product/${id}`,
            query: {
                title,
                thumbnail,
                category,
                price
            },
        }
    } className="flex-shrink-0 border border-slate-400/20 bg-white overflow-hidden rounded-lg flex flex-col h-auto md:h-auto w-60 md:w-72">
              <div className="md:h-3/4 p-4 pb-0  h-2/4">
                <img className="h-full w-full object-contain " src={`${thumbnail}`} alt="" />
              </div>
              <div className="px-8  pt-2 md:pb-5 pb-4 h-2/4 flex flex-col justify-between">
                <div>
                  <p className="text-slate-500 text-lg">{category}</p>
                  <p className="text-lg font-semibold">{title}</p>
                </div>
                <div className="flex mt-4 items-center justify-between">
                  <p className=" font-semibold">${price}</p>
                  <button className="px-3 bg-slate-200/40 hover:bg-black/20 transition-all duration-300 ease-in-out rounded-full py-2">Add to cart</button>
                </div>
              </div>
    </Link>
  )
}

export default Product