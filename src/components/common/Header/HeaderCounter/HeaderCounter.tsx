import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

interface IProps {
  totalQuantity: number;
  to: string;
  svgIcon: React.ReactNode;
}
const { counterContainer, counterQuantity } = styles;

const HeaderCounter = ({ totalQuantity, to, svgIcon }: IProps) => {
  return (
    <div className={counterContainer}>
      <NavLink to={to} className={styles.basketLink}>
        {svgIcon}
        {totalQuantity > 0 && (
          <div className={counterQuantity}>{totalQuantity}</div>
        )}
      </NavLink>
    </div>
  );
};
export default HeaderCounter;
