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
        (element) => element?.name === data?.name
      );
      if (foundData) {
        foundData.quantity += 1;
      } else {
        const newElement = { ...data, quantity: 1 };
        state.cartItems.push(newElement);
      }
    },
    updateItemQuantity: (state, action) => {
      const { name, manual } = action.payload;
      const foundElement = state.cartItems.find(
        (element) => element.name === name
      );
      const foundIndex = state.cartItems.find(
        (element) => element.name === name
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
        (element) => element.name === action.payload
      );
      const updatedItems = [...state.cartItems];
      updatedItems.splice(foundElementIndex, 1);
      state.cartItems = updatedItems;
    },
    addItemFromRoute: (state, action) => {
      const data = action.payload;
      const foundData = state.cartItems.find(
        (item) => item.productCode === action.payload.productCode
      );
      if (foundData) {
        foundData.quantity += action.payload.quantity;
      } else {
        const newElement = data;
        state.cartItems.push(newElement);
      }
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    clearCartData: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  saveItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  addItemFromRoute,
  setCartItems,
  clearCartData,
} = cartSlice.actions;
export default cartSlice.reducer;
