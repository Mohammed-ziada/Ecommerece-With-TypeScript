import { Heading } from "@components/common";
import { SubTotalCartItems } from "@components/ecommerce";
import CartItemList from "@components/ecommerce/CartItemLIst/CartItemList";
import Empty from "@components/feedback/Empty/Empty";
import emptyImage from "@assets/Empty.png";
// import Product from "@components/ecommerce/Products/Product";
import Loading from "@components/feedback/Loading/Loading";
// import CartItem from "@components/ecommerce";
import {
  actCartItem,
  changeQuantityAction,
  removeCartItem,
} from "@store/cart/addToCart";
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
  const removeHandler = useCallback(
    (id: string) => {
      // console.log(id);
      dispatch(removeCartItem(id));
    },
    [dispatch]
  );
  return (
    <div>
      <Heading title="Your Cart" />
      <Loading status={loading} error={error}>
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantity={changeQuantity}
              removeHandler={removeHandler}
            />
            <SubTotalCartItems products={products} />
          </>
        ) : (
          <Empty message="Your Cart Empty" logoSrc={emptyImage} />
        )}
        {/* <CartItemList products={products} /> */}
      </Loading>
    </div>
  );
};

export default Cart;
