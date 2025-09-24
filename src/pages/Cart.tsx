// import { Heading } from "@components/common";
import { SubTotalCartItems } from "@components/ecommerce";
import CartItemList from "@components/ecommerce/CartItemLIst/CartItemList";
import Empty from "@components/feedback/Empty/Empty";
import emptyImage from "@assets/Empty.png";
// import Product from "@components/ecommerce/Products/Product";
import Loading from "@components/feedback/Loading/Loading";
import useCart from "@hooks/useCart";
// import CartItem from "@components/ecommerce";

const Cart = () => {
  const { products, changeQuantity, removeHandler, loading, error } = useCart();
  return (
    <div>
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
