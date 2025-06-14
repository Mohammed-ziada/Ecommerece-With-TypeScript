import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
const { product, productImg } = styles;
import { addToCart } from "@store/cart/addToCart";
import { useEffect, useState } from "react";

const Product = ({ id, img, title, price, max, quantity }: TProduct) => {
  // console.log(max);
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const currentRemaining = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemaining <= 0 ? true : false;
  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    setIsBtnDisabled(true);

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [isBtnDisabled]);

  const handleAddToCart = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={handleAddToCart}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <Spinner animation="border" size="sm" style={{ color: "white" }} />
        ) : quantityReachedToMax ? (
          "Out of Stock"
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
