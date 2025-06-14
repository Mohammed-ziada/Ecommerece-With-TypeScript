import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import actCartItem from "./act/actCartItem";
// import { RootState } from "..";
// import { RootState } from "@reduxjs/toolkit/query";
import { getTotalQuantity } from "./slelectors";
import { TLoading } from "@customTypes/shared";
// import { act } from "react";
interface AddToCartState {
  items: { [key: string]: number };
  productInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}
const initialState: AddToCartState = {
  items: {},
  productInfo: [],
  loading: "idle",
  error: null,
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
    changeQuantityAction: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
      console.log("changeQuantityAction", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actCartItem.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actCartItem.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productInfo = action.payload;
      state.error = null;
    });
    builder.addCase(actCartItem.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export { getTotalQuantity, actCartItem };
export default addToCartSlice.reducer;
export const { addToCart, changeQuantityAction } = addToCartSlice.actions;
