import styles from "./styles.module.css";
import Logo from "../../../assets/svg/wishlist.svg?react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import { getTotalWishlist } from "@store/wishlist/selector/index";

const { basketContainer, basketQuantity } = styles;

const HeaderWishlist = () => {
  // const totalQuantity = useAppSelector(getTotalQuantity);
  const totalQuantity = useAppSelector(getTotalWishlist);
  console.log("HeaderWishlist totalQuantity", totalQuantity);
  return (
    <div className={basketContainer}>
      <NavLink to="/wishlist" className={styles.basketLink}>
        <Logo title="Basket Icon" />
        {totalQuantity > 0 && (
          <div className={basketQuantity}>{totalQuantity}</div>
        )}
      </NavLink>
    </div>
  );
};
export default HeaderWishlist;
