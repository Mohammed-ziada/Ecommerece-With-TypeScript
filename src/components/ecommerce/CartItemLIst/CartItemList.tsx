import { TProduct } from "@customTypes/product";
import Cart from "@pages/Cart";
import CartItem from "../CartItems/CartItems";

interface Iprops {
  products: TProduct[];
  changeQuantity: (id: string, quantity: number) => void; // Replace 'any' with the actual type of products if available
  removeHandler: (id: string) => void;
}
const CartItemList = ({ products, changeQuantity, removeHandler }: Iprops) => {
  const renderItems = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantity={changeQuantity}
      removeHandler={removeHandler}
    />
  ));
  return <div>{renderItems}</div>;
};
export default CartItemList;
