import { Form, Button } from "react-bootstrap";
// import styles from "./styles.module.css";
import styles from "./Style.module.css"; // Adjust the import path as necessary
import { TProduct } from "@customTypes/product";
import { memo } from "react";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;
type CartItemProps = TProduct & {
  changeQuantity: (id: string, quantity: number) => void;
};
const CartItem = memo(
  ({ img, max, price, title, id, quantity, changeQuantity }: CartItemProps) => {
    const renderOptions = Array(max)
      .fill(0)
      .map((_, index) => {
        const value = index + 1;
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newQuantity = parseInt(e.target.value, 10);
      changeQuantity(id, newQuantity);
    };
    console.log("render ");
    return (
      <div className={cartItem}>
        <div className={product}>
          <div className={productImg}>
            <img src={img} alt="title" />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <h3>{price.toFixed(2)} EGP</h3>
            <Button
              variant="secondary"
              style={{ color: "white" }}
              className="mt-auto"
            >
              Remove
            </Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select
            aria-label="Default select example"
            value={quantity}
            onChange={handleChange}
          >
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
