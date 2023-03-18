import { create } from "zustand";

const cartStore = (set) => ({
  cartData: [],
  addCartData: (data) =>
    set((state) => {
      cartData: [...state.cartData, data];
    }),
  removeCartData: () => ({ cartData: [] }),
});

const useCartstore = create(cartStore);

export default useCartstore;
