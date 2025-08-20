import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import addToCart from "./cart/addToCart";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import wishlist from "./wishlist/wishlistSlice";

// const rootPersistConfig = { key: "root", storage, whitelist: ["addToCart"] };
const cartPersistConfig = { key: "cart", storage, whitelist: ["items"] };
const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemId"],
};
const rootReducer = combineReducers({
  categories,
  products,

  addToCart: persistReducer(cartPersistConfig, addToCart),
  wishlist: persistReducer(wishlistPersistConfig, wishlist), // Assuming wishlist is a slice reducer
});

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
const persistor = persistStore(store);
export { store, persistor };
