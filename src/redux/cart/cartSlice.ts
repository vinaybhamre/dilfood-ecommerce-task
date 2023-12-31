import { createSlice } from "@reduxjs/toolkit";

export type ProductType = {
  id: string;
  productName: string;
  imgUrl: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

type CartState = {
  cartItems: ProductType[];
  totalAmount: number;
  totalQuantity: number;
};

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id,
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      );
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      );
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem && Number(quantity) <= 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }

      if (!existingItem) {
        return;
      } else {
        state.totalQuantity += Number(quantity) - existingItem?.quantity;
        existingItem.quantity = Number(quantity);
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      );
    },
    clearCart: () => initialState,
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
