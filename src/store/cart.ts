import { create } from 'zustand';

import { Cart, Product } from '~/types';

interface CartStore {
    cart: Cart;
    setCart: (cart: Cart) => void;
    addItem: ({ product, quantity }: { product: Product; quantity: number }) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}

const cart = create<CartStore>((set, get) => ({
    cart: {
        items: [],
        totalPrice: 0,
        totalItems: 0,
    },
    setCart: (cart) => set({ cart }),
    addItem: ({ product, quantity }) =>
        set((state) => {
            const itemIndex = state.cart.items.findIndex((item) => item.product._id === product._id);
            if (itemIndex !== -1) {
                state.cart.items[itemIndex].quantity += quantity;
            } else {
                state.cart.items.push({ product, quantity });
            }
            state.cart.totalItems += quantity;
            state.cart.totalPrice += product.price * quantity;
            return { cart: state.cart };
        }),
    removeItem: (id) =>
        set((state) => {
            const itemIndex = state.cart.items.findIndex((item) => item.product._id === id);
            if (itemIndex !== -1) {
                const item = state.cart.items[itemIndex];
                state.cart.totalItems -= item.quantity;
                state.cart.totalPrice -= item.product.price * item.quantity;
                state.cart.items.splice(itemIndex, 1);
            }
            return { cart: state.cart };
        }),
    clearCart: () =>
        set((state) => {
            state.cart = {
                items: [],
                totalPrice: 0,
                totalItems: 0,
            };
            return { cart: state.cart };
        }),
    getTotalPrice: () => get().cart.totalPrice,
    getTotalItems: () => get().cart.totalItems,
}));

export default cart;
