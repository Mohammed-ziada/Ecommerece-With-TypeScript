import styles from "./styles.module.css";
import Logo from "../../../assets/svg/cart.svg?react";
import { NavLink } from "react-router-dom";
// import { get } from "node_modules/axios/index.d.cts";
// import { getTotalQuantity } from "@store/cart/addtoCart";
import { useAppSelector } from "@store/hooks";
import { getTotalQuantity } from "@store/cart/addToCart";
// import { useAppSelector } from "@store/hooks";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  // const cartItems = useAppSelector((state) => state.addToCart.items);
  // const totalQuantity = Object.values(cartItems).reduce((item, current) => {
  //   return item + current;
  // }, 0);
  const totalQuantity = useAppSelector(getTotalQuantity);
  return (
    <div className={basketContainer}>
      <NavLink to="/cart">
        <Logo title="Basket Icon" />
        <div className={basketQuantity}>{totalQuantity}</div>
      </NavLink>
    </div>
  );
};
export default HeaderBasket;
