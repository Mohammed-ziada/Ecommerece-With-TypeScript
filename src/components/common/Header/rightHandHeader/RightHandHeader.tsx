import HeaderCounter from "../HeaderCounter/HeaderCounter";
import CartICon from "../../../../assets/svg/cart.svg?react";
import WhishlistIcon from "../../../../assets/svg/wishlist.svg?react";

// imports for counters
import { useAppSelector } from "@store/hooks";
import { getTotalQuantity } from "@store/cart/addToCart";
import { getTotalWishlist } from "@store/wishlist/selector/index";
// const { headerRightBar } = styles;
const RightHandHeader = () => {
  const cartTotalQuantity = useAppSelector(getTotalQuantity);
  const wishlistTotalQuantity = useAppSelector(getTotalWishlist);

  return (
    <>
      <HeaderCounter
        totalQuantity={wishlistTotalQuantity}
        to="/wishlist"
        svgIcon={<WhishlistIcon title="Wishlist Icon" />}
      />
      <HeaderCounter
        totalQuantity={cartTotalQuantity}
        to="/cart"
        svgIcon={<CartICon title="Basket Icon" />}
      />
    </>
  );
};
export default RightHandHeader;
