import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.data.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.data.push({
          ...action.payload,
          totalPrice: Number(action.payload.quantity * action.payload.price),
        });
      }
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity > 0 ? action.payload.quantity : 1;
        item.totalPrice = Number(item.quantity * item.price);
      }
    },
  },
});

export const { addToCart, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
