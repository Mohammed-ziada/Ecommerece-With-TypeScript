import {
  actCartItem,
  changeQuantityAction,
  removeCartItem,
} from "@store/cart/addToCart";
import { useAppDispatch, useAppSelector } from "@store/hooks";
// import { c } from "node_modules/vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf";
import { useCallback, useEffect } from "react";
const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error, productInfo } = useAppSelector(
    (state) => state.addToCart
  );
  useEffect(() => {
    dispatch(actCartItem());
  }, [dispatch]);
  const products = productInfo.map((el) => ({
    ...el,
    quantity: el.id !== undefined ? items[el.id] || 0 : 0,
  }));

  const changeQuantity = useCallback(
    (id: string, quantity: number) => {
      dispatch(changeQuantityAction({ id, quantity }));
    },
    [dispatch]
  );
  const removeHandler = useCallback(
    (id: string) => {
      // console.log(id);
      dispatch(removeCartItem(id));
    },
    [dispatch]
  );
  return { loading, error, products, changeQuantity, removeHandler };
};

export default useCart;
