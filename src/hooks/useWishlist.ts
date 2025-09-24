import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  productsFullInfoCleanUp,
} from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";
const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { itemId, loading, productsFullInfo, error } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.addToCart.items);
  useEffect(() => {
    const promise = dispatch(actGetWishlist());
    return () => {
      promise.abort();
      dispatch(productsFullInfoCleanUp());
    };
  }, [dispatch]);
  const productInfo = productsFullInfo
    .filter((el) => itemId.includes(el.id))
    .map((el) => ({
      ...el,
      quantity: cartItems[el.id] || 0,
      isLiked: true,
    }));
  return { loading, error, productInfo };
};

export default useWishlist;
