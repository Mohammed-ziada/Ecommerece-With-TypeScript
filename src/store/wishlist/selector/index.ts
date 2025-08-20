// store/wishlist/selector/index.ts
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

export const getTotalWishlist = createSelector(
  (state: RootState) => state.wishlist.itemId,
  (items) => {
    console.log("Wishlist Items in Selector:", items); // Debug log
    console.log("Wishlist Count in Selector:", items.length); // Debug log
    return items.length;
  }
);
