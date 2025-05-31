import Product from "@components/ecommerce/Products/Product";
import { Container } from "react-bootstrap";
import { useAppDispatch } from "@store/hooks";
import { useAppSelector } from "@store/hooks";
import { actProducts, ProductcleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/Loading/Loading";
import { GridList } from "@components/common";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actProducts(params.prefix as string));
    return () => {
      dispatch(ProductcleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
