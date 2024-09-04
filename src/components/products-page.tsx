"use client"
import { useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'
import Product from './product'

interface Product{
    id:          string      
    title:       string
    description: string
    price:       number
    imageUrl:    string
    category:    string
}

const categories = ["SOFA", "CHAIR", "BED", "LAMP"]

export default function ProductsPage() {
    const[products, setProducts] = useState<Product[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);


  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const products = await response.json();
      setProducts(products);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts()
  }, [])

  const filteredProducts = products
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/" className="flex items-center text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold ml-auto">Our Products</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-6">
              <Label htmlFor="search" className="text-sm font-medium mb-2 block">Search</Label>
              <Input
                type="text"
                id="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Categories</h3>
              {categories.map(category => (
                <div key={category} className="flex items-center mb-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={category} className="ml-2 text-sm font-medium cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Price Range</h3>
              <Slider
                min={0}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <Button
              onClick={() => {
                setSelectedCategories([])
                setPriceRange([0, 1000])
                setSearchTerm("")
              }}
              variant="outline"
              className="w-full"
            >
              Reset Filters
            </Button>
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
            //   <div key={product.id} className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
            //     <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            //     <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            //     <p className="text-gray-600 mb-2">{product.category}</p>
            //     <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
            //     <Button className="w-full flex items-center justify-center">
            //       <ShoppingCart className="mr-2 h-4 w-4" />
            //       Add to Cart
            //     </Button>
            //   </div>
            <Product product={product} key={product.id}/>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No products found matching your criteria.</p>
          )}
        </main>
      </div>
    </div>
  )
}