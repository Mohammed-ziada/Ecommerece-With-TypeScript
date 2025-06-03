import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
const { product, productImg } = styles;
import { addToCart } from "@store/cart/addtoCart";
const Product = ({ id, img, title, price }: TProduct) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    // dispatch(addToCart({ id, quantity: 1 }));
    dispatch(addToCart(id));
    // console.log("Add to cart clicked for product:", id);
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
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
