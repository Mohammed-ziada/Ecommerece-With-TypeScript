import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
// import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";
const actCartItem = createAsyncThunk(
  "cart/actCartItem",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { addToCart } = getState() as RootState;
    const itemsId = Object.keys(addToCart.items);
    if (itemsId.length === 0) {
      return [];
    }
    try {
      const concatenatedItems = itemsId.map((id) => `id=${id}`).join("&");
      const res = await axios.get(`/products?${concatenatedItems}`);
      const filteredData = res.data.filter((product) =>
        itemsId.includes(product.id?.toString())
      );
      console.log(filteredData);
      //   console.log(filteredData);
      return filteredData;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to fetch cart items");
    }
  }
);
export default actCartItem;
