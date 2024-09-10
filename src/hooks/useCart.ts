import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '@/store/atoms/cartState';  // Import your cartState atom

// Define the type for a cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string
  quantity: number;
}

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  // Load cart from local storage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem('cartState');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(cart));
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (newItem: CartItem) => {
    const existingItem = cart.find(item => item.id === newItem.id);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + newItem.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Function to remove items from the cart
  const removeItem = (itemId: string) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0))
  }

  const emptyCart = () => {
    setCart([])
  }

  return {
    cart,
    addToCart,
    removeItem,
    updateQuantity,
    emptyCart
  };
};

export default useCart;
