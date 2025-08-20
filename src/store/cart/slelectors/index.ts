// import { create } from "node_moules/axios/index.d.cts";

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../index";

const getTotalQuantity = createSelector(
  (state: RootState) => state.addToCart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce((item, current) => {
      return item + current;
    }, 0);
    return totalQuantity;
  }
);

export { getTotalQuantity };
