import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
const { product, productImg, wishlistBtn } = styles;
import { addToCart } from "@store/cart/addToCart";
import { useEffect, useState, memo } from "react";
import like from "@assets/svg/like.svg";
import likefill from "@assets/svg/like-fill.svg";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
const Product = memo(
  ({ id, img, title, price, max, quantity, isLiked }: TProduct) => {
    // console.log(max);
    const dispatch = useAppDispatch();
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const currentRemaining = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemaining <= 0 ? true : false;
    const [isLoading, setIsLoading] = useState(false);
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

    const handleLikeToggle = (id: string) => {
      if (isLoading) return;
      setIsLoading(true);
      if (id !== undefined) {
        dispatch(actLikeToggle(id))
          .unwrap()
          .then(() => {
            setIsLoading(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
      }
    };
    return (
      <div className={product}>
        <div className={wishlistBtn} onClick={() => handleLikeToggle(id)}>
          {isLoading ? (
            <Spinner animation="border" size="sm" variant="primary" />
          ) : isLiked ? (
            <img src={likefill} alt="like" />
          ) : (
            <img src={like} alt="like" />
          )}
          {/* <img src={like} alt="like" /> */}
        </div>
        <div className={productImg}>
          <img src={img} alt="like" />
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
  }
);

export default Product;
