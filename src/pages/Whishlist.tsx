import { GridList, Heading } from "@components/common";
import Loading from "@components/feedback/Loading/Loading";
import Product from "@components/ecommerce/Products/Product";
import useWishlist from "@hooks/useWishlist";

// import emptyImage from "@assets/Empty.png";
// interface Iprops {}
const Whishlist = () => {
  const { error, loading, productInfo } = useWishlist();

  return (
    <div>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error}>
        <GridList
          records={productInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </div>
  );
};
export default Whishlist;
