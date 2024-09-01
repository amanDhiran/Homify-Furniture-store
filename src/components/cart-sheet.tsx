import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Minus, Plus, Trash2, X } from "lucide-react";
import useCart from "@/hooks/useCart";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartTotalState } from "@/store/atoms/cartState";
import { Button } from "./ui/button";
import { FaCartShopping } from "react-icons/fa6";

export function CartSheet() {
  const { cart, removeItem, updateQuantity } = useCart();
  const totalPrice = useRecoilValue(cartTotalState);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className=" text-gray-700 hover:bg-transparent hover:text-primary"
        >
          <FaCartShopping className="h-5 w-5" />
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review your items and checkout when you're ready.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {/* Cart items would go here */}
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={"item.image"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <>
            <Separator className="my-4" />
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Button className="w-full mt-4">Proceed to Checkout</Button>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
