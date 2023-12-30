import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    saveItemToCart: (state, action) => {
      const data = action.payload;
      const foundData = state.cartItems.find(
        (element) => element.item.name === data.name
      );
      if (foundData) {
        foundData.quantity += 1;
      } else {
        const newElement = {
          item: data,
          quantity: 1,
        };
        state.cartItems.push(newElement);
      }
    },
  },
});

export const { saveItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
