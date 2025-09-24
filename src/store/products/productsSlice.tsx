import { createSlice } from "@reduxjs/toolkit";
import actProducts from "./act/actProductsSlice";
import { TLoading } from "@customTypes/shared.type";
import { TProduct } from "@customTypes/product.type";
interface IProduct {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}
const initialState: IProduct = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    ProductcleanUp: (state) => {
      state.records = [];
    },
  },
  // to excute AsyncThunk
  extraReducers: (builder) => {
    builder.addCase(actProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actProducts.rejected, (state, action) => {
      state.loading = "pending";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export const { ProductcleanUp } = productsSlice.actions;
export { actProducts };
export default productsSlice.reducer;
