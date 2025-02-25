import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.data.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.data.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    moveToCart: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist, moveToCart } = wishlistSlice.actions;
export default wishlistSlice.reducer;
