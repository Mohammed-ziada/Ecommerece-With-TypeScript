import styles from "./styles.module.css";
import Logo from "../../../assets/svg/cart.svg?react";
import { NavLink } from "react-router-dom";
const { basketContainer, basketQuantity } = styles;
type IProp = {
  totalQuantity: number;
};
const HeaderBasket = ({ totalQuantity }: IProp) => {
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
