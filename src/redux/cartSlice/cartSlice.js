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
    updateItemQuantity: (state, action) => {
      const { name, manual } = action.payload;
      const foundElement = state.cartItems.find(
        (element) => element.item.name === name
      );
      const foundIndex = state.cartItems.find(
        (element) => element.item.name === name
      );
      if (manual === "increase") {
        foundElement.quantity += 1;
      } else {
        if (foundElement.quantity < 2) {
          const updatedItems = [...state.cartItems];
          updatedItems.splice(foundIndex, 1);
          state.cartItems = updatedItems;
          return;
        } else {
          foundElement.quantity -= 1;
        }
      }
    },
    removeItemFromCart: (state, action) => {
      const foundElementIndex = state.cartItems.findIndex(
        (element) => element.item.name === action.payload
      );
      const updatedItems = [...state.cartItems];
      updatedItems.splice(foundElementIndex, 1);
      state.cartItems = updatedItems;
    },
  },
});

export const { saveItemToCart, updateItemQuantity, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
