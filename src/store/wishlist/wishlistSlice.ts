import { createSlice } from "@reduxjs/toolkit";
import { actLikeToggle } from "./act/actLikeToggle";
import { getTotalWishlist } from "./selector/index";
import actGetWishlist from "./act/actGetWishlist";
import { TLoading } from "@customTypes/shared.type";
import { TProduct } from "@customTypes/product.type";
interface IWishlist {
  itemId: number[];
  error?: string | null;
  loading: TLoading;
  productsFullInfo: TProduct[];
}

const initialState: IWishlist = {
  itemId: [],
  productsFullInfo: [],
  error: null,
  loading: "idle",
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    productsFullInfoCleanUp: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      console.log("Before Toggle:", state.itemId);
      if (action.payload.type === "add") {
        state.itemId.push(action.payload.id);
      } else {
        state.itemId = state.itemId.filter((id) => id !== action.payload.id);
        state.productsFullInfo = state.productsFullInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
      console.log("After Toggle:", state.itemId);
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    // get Itrems for wishlist

    builder.addCase(actGetWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actLikeToggle, getTotalWishlist, actGetWishlist };
export const { productsFullInfoCleanUp } = wishlistSlice.actions;
export const { actions, reducer } = wishlistSlice;
export default reducer;
