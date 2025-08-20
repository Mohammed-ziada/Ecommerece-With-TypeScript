// import Empty from "@components/feedback/Empty/Empty";
// import Loading from "@components/feedback/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  productsFullInfoCleanUp,
} from "@store/wishlist/wishlistSlice";
import { useEffect } from "react";
import { GridList } from "@components/common";
import Loading from "@components/feedback/Loading/Loading";
import Product from "@components/ecommerce/Products/Product";

// import emptyImage from "@assets/Empty.png";
interface Iprops {}
const Whishlist = ({}: Iprops) => {
  const dispatch = useAppDispatch();
  const { itemId, loading, productsFullInfo, error } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.addToCart.items);
  useEffect(() => {
    dispatch(actGetWishlist());
    return () => {
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

  return (
    <div>
      <Loading status={loading} error={error}>
        <GridList
          records={productInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </div>
  );
};
export default Whishlist;
