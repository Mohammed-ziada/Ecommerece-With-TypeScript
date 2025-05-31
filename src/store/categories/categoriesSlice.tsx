import { createSlice } from "@reduxjs/toolkit";
import actCategories from "./act/actCategoriesSlice";
import { TLoading } from "@customTypes/shared";
import { TCategory } from "@customTypes/category";
interface ICategories {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}
const initialState: ICategories = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  // to excute AsyncThunk
  extraReducers: (builder) => {
    builder.addCase(actCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actCategories.rejected, (state, action) => {
      state.loading = "pending";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { actCategories };
export default categoriesSlice.reducer;
