import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

type useCartStoreType = {
    cart: any[]
    addItemToCard:(product:any)=>void
    removeItemFromCart:(id: number)=>void
    clearCart:()=>void
};

const useCartStore = create<useCartStoreType>()(
    persist(
        (set) => ({
            cart: [],
            addItemToCard: (product) =>{
                set((state) => {
                    const existingCart = state.cart;
                    const existingItemIndex = existingCart.findIndex(
                        (item) => item.id === product.id
                    );
                    let updatedCart;
                    if (existingItemIndex !== -1) {
                        updatedCart = existingCart.map((item, index) =>
                            index === existingItemIndex
                                ? {
                                      ...item,
                                      quantity: item.quantity + product.quantity,
                                      addedAt: dayjs(),
                                  }
                                : item
                        );
                    } else {
                        updatedCart = [
                            ...existingCart,
                            { ...product, addedAt: dayjs() },
                        ];
                    }

                    return { cart: updatedCart };
                });
            },
            removeItemFromCart:(id)=>{
                set(state=>({cart: state.cart.filter(item=> item.id !== id)}))
            
            },
            clearCart:()=>{
                set({cart: []})
            }
        }),
        {
            name: 'cart',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);

export default useCartStore;
