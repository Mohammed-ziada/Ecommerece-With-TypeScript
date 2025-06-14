import { Heading } from "@components/common";
import { CartItem, SubTotalCartItems } from "@components/ecommerce";
import CartItemList from "@components/ecommerce/CartItemLIst/CartItemList";
import Product from "@components/ecommerce/Products/Product";
import Loading from "@components/feedback/Loading/Loading";
// import CartItem from "@components/ecommerce";
import { actCartItem, changeQuantityAction } from "@store/cart/addToCart";
import { useAppDispatch, useAppSelector } from "@store/hooks";
// import { c } from "node_modules/vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf";
import { useCallback, useEffect } from "react";
const Cart = () => {
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

  return (
    <div>
      <Heading>Your Cart</Heading>
      <Loading status={loading} error={error}>
        <>{/* <CartItemList products={products} /> */}</>
      </Loading>
      <CartItemList products={products} changeQuantity={changeQuantity} />
      <SubTotalCartItems />
    </div>
  );
};

export default Cart;
