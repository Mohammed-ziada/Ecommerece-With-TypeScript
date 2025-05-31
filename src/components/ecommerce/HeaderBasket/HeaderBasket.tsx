import styles from "./styles.module.css";
import Logo from "../../../assets/svg/cart.svg?react";
import { NavLink } from "react-router-dom";
const { basketContainer, basketQuantity } = styles;
const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <NavLink to="/cart">
        <Logo title="Basket Icon" />
        <div className={basketQuantity}>0</div>
      </NavLink>
    </div>
  );
};
export default HeaderBasket;
