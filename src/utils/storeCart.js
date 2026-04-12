import { create } from "zustand";
import { persist } from "zustand/middleware";

const storeCart = create(
  persist(
    (set) => ({
      cartItems: [],
      // Initialize other values if needed
      numItemsInCart: 0,

      addToCart: (product) =>
        set((state) => {
          // FIX 1: Use === for comparison, not =
          const existItem = state.cartItems.find(
            (item) => item.cartID === product.cartID,
          );

          if (existItem) {
            const newCart = state.cartItems.map((item) => {
              // FIX 2: Only update the specific item that matches
              if (
                item.productID === product.productID &&
                item.color === product.color
              ) {
                return { ...item, amount: item.amount + product.amount };
              }
              return item;
            });

            return {
              cartItems: newCart,
              numItemsInCart: newCart.reduce((acc, cur) => acc + cur.amount, 0),
            };
          }

          const newCart = [...state.cartItems, { ...product }];

          return {
            cartItems: newCart,
            numItemsInCart: newCart.reduce((acc, cur) => acc + cur.amount, 0),
          };
        }),

      removeFromCart: (cartID) =>
        set((state) => {
          const newCart = state.cartItems.filter(
            (item) => item.cartID !== cartID,
          );
          return {
            cartItems: newCart,
            numItemsInCart: newCart.reduce((acc, cur) => acc + cur.amount, 0),
          };
        }),

      editAmount: (cartID, amount) => {
        set((state) => {
          const newCart = state.cartItems.map((item) => {
            if (item.cartID === cartID) {
              return { ...item, amount: amount };
            }
            return item; // FIX 3: Must return the original item if no match
          });

          return {
            cartItems: newCart,
            numItemsInCart: newCart.reduce((acc, cur) => acc + cur.amount, 0),
          };
        });
      },
    }),
    {
      name: "cart-storage", // Standard name for localStorage key
    },
  ),
);

export default storeCart;
