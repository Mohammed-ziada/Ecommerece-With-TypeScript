import { useAppDispatch } from "@store/hooks";
import { useAppSelector } from "@store/hooks";
import { actProducts, ProductcleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const useProduscts = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.addToCart.items);
  const { error, loading, records } = useAppSelector((state) => state.products);
  const whislistItemsId = useAppSelector((state) => state.wishlist.itemId);
  const paramPrefix = params.prefix as string;
  // console.log("productInfo", productInfo);
  useEffect(() => {
    const promise = dispatch(actProducts(paramPrefix as string));
    return () => {
      promise.abort();
      dispatch(ProductcleanUp());
    };
  }, [dispatch, params]);

  const productInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: whislistItemsId.includes(el.id),
  }));
  return { error, loading, productInfo, paramPrefix };
};

export default useProduscts;
