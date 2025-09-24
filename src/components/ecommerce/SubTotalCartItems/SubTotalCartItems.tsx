import { TProduct } from "@customTypes/product.type";
import styles from "./style.module.css"; // Adjust the import path as necessary
type subTotalCart = {
  products: TProduct[];
};
const SubTotalCartItems = ({ products }: subTotalCart) => {
  const total = products.reduce((acc, el) => {
    const quantity = el.quantity || 0; // Ensure quantity is defined
    const price = el.price || 0; // Ensure price is defined
    if (quantity && typeof quantity === "number") {
      return acc + price * quantity;
    }
    return acc;
  }, 0);
  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{total} EGP</span>
    </div>
  );
};

export default SubTotalCartItems;
