import Image from "next/image";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShoppingCart, Star } from "lucide-react"
import ProductDetailPage from "@/components/product-detail";

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
	params: {
		id: string;
	};
}

export default function ProductPage({params, }: Props){
    const {id} = params;
    
	return (
    <ProductDetailPage id={id}/>
  )
}
