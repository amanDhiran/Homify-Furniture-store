import {atom, selector} from 'recoil'

interface CartItem{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}
//TODO: move cart to database or a better flow to persist cart for each user rather than local storage

export const cartStateDefault = selector<CartItem[]>({
    key: 'cartStateDefault',
    get: () => {
      const savedCart = localStorage.getItem('cartState');
      return savedCart ? JSON.parse(savedCart) : [];
    },
});

export const cartState = atom<CartItem[]>({
    key: "cartState",
    default: cartStateDefault 
})

export const cartTotalState = selector({
    key: "cartTotalState",
    get: ({get}) => {
        const cart = get(cartState);
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
})

export const cartTotalItemsState = selector({
    key: "cartTotalItemsState",
    get: ({get}) => {
        const cart = get(cartState);
        return cart.reduce((total, item) => total + item.quantity, 0)
    }
})