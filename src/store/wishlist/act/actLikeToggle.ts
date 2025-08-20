import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const isExistRecord = await axios.get(
        `/wishlist?userId=1&productId=${id}`
      );
      if (isExistRecord.data.length > 0) {
        await axios.delete(`/wishlist/${isExistRecord.data[0].id}`);
        return { type: "remove", id };
      } else {
        await axios.post("/wishlist", { userId: 1, productId: id });
        return { type: "add", id };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);
export { actLikeToggle };
