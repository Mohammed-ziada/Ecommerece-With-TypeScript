import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
interface AddToCartState {
  items: { [key: number]: number };
  productInfo: TProduct[];
}
const initialState: AddToCartState = {
  items: {},
  productInfo: [],
};
const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
        // console.log("addToCart action", action.payload);
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export default addToCartSlice.reducer;
export const { addToCart } = addToCartSlice.actions;
