import { TCategory } from "@customTypes/category.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isAxiosError } from "axios";

type TResponse = TCategory[];
const actCategories = createAsyncThunk(
  "categories/actCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await axios.get<TResponse>("/categories", { signal });
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
export default actCategories;
