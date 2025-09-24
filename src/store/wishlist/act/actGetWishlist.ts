import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@customTypes/product.type";

type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk<TResponse>(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;
    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        "/wishlist?userId=1",
        { signal }
      );
      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }
      const concatenatedItemId = userWishlist.data
        .map((el) => `id=${el.productId}`)
        .join("&");
      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemId}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetWishlist;
