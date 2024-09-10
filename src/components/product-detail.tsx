"use client"
import Image from "next/image";
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShoppingCart, Star } from "lucide-react"
import { Product } from "@prisma/client";
import useCart from "@/hooks/useCart";



export default function ProductDetailPage({id}: {id: string}){

  const [product, setProduct] = useState<Product | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const { addToCart, removeItem } = useCart();



  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/product/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch the product");
      }
      const data = await response.json();
      setProduct(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    } 
  };

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
    {loading && <p>loading...</p>}
    {product && <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image src={product.imageUrl} className="object-cover w-full h-full" alt={product.title} width={400} height={400} />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
          </div>
          <div className="text-4xl font-bold">${product.price}</div>
          <p className="text-gray-600">
            {product.description}
          </p>
          {/* <Card>
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
                   TODO: quantity logic 
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
          </Card> */}

          {/* TODO: handle addToCart */}
          <Button className="w-full" size="lg" onClick={() => addToCart({ id: id, image: product.imageUrl, name: product.title, price: product.price, quantity: 1 })} 
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
          <div className="text-sm text-gray-600">
            <p>Free shipping on orders over $999</p>
            <p>30-day return policy</p>
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}
