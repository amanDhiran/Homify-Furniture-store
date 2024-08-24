import Image from "next/image";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShoppingCart, Star } from "lucide-react"

// export default function Component() {
//   const [quantity, setQuantity] = useState(1)
//   const [selectedColor, setSelectedColor] = useState("Natural Oak")

//   const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value)
//     setQuantity(isNaN(value) || value < 1 ? 1 : value)
//   }

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} ${selectedColor} Luxe Lounge Chair(s) to cart`)
//   }
interface Props {
	searchParams: {
        thumbnail: string,
        category: string,
        title: string,
        price: number
	};
	params: {
		id: number;
	};
}

export default function ProductPage({params, searchParams}: Props){
    const { title, thumbnail, category, price } = searchParams;
	return (
		// <div className="flex flex-col  justify-between gap-12 p-12 text-gray-700">
		// 	<Image src={thumbnail} alt={title} width={400} height={400} />
		// 	<div>
		// 		<h1 className="font-bold text-3xl text-emerald-400">{title}</h1>
		// 		<div className="flex gap-4">
		// 			<p className="font-bold text-teal-700 text-2xl">
		// 				{price}
		// 			</p>
		// 		</div>
		// 	</div>
		// 	<Image src={thumbnail} alt={title} width={400} height={400} />
		// 	<div>
		// 		<h1 className="font-bold text-3xl text-emerald-400">{title}</h1>
		// 		<div className="flex gap-4">
		// 			<p className="font-bold text-teal-700 text-2xl">
		// 				{price}
		// 			</p>
		// 		</div>
		// 	</div>
		// 	<Image src={thumbnail} alt={title} width={400} height={400} />
		// 	<div>
		// 		<h1 className="font-bold text-3xl text-emerald-400">{title}</h1>
		// 		<div className="flex gap-4">
		// 			<p className="font-bold text-teal-700 text-2xl">
		// 				{price}
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image src={thumbnail} className="object-cover w-full h-full" alt={title} width={400} height={400} />
          </div>
          {/* <div className="flex gap-4 overflow-auto pb-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/placeholder.svg?height=100&width=100&text=View ${i}`}
                alt={`Luxe Lounge Chair view ${i}`}
                className="w-24 h-24 rounded-md object-cover cursor-pointer hover:opacity-75 transition-opacity"
              />
            ))}
          </div> */}
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            {/* REVIEW */}
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
            </div>
          </div>
          <div className="text-4xl font-bold">${price}</div>
          <p className="text-gray-600">
            {/* TODO: add description */}
            Experience unparalleled comfort with our Luxe Lounge Chair. Crafted with premium materials and designed for
            both style and relaxation, this chair is the perfect addition to any living space.
          </p>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div>
                <Label htmlFor="quantity" className="text-base font-semibold">
                  Quantity
                </Label>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Decrease quantity"
                  >
                    -
                  </Button>
                  {/* TODO: quantity logic */}
                  <Input
                    type="number"
                    id="quantity"
                    value= "1"
                    className="w-20 text-center"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Increase quantity"
                  >
                    +
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* TODO: handle addToCart */}
          <Button className="w-full" size="lg" 
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
          <div className="text-sm text-gray-600">
            <p>Free shipping on orders over $999</p>
            <p>30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
