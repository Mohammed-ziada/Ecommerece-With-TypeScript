import { TProduct } from "@customTypes/product.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";

type TResponse = TProduct[];
const actProducts = createAsyncThunk(
  "products/actProducts",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`, {
        signal,
      });
      //   const data = res.data.map((el) => el.);
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);
export default actProducts;
