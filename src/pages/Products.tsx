import Product from "@components/ecommerce/Products/Product";
import { Container } from "react-bootstrap";

import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";
import useProduscts from "@hooks/useProduscts";

const Products = () => {
  const { error, loading, productInfo, paramPrefix } = useProduscts();
  return (
    <Container>
      <Heading title={`${paramPrefix?.toLocaleUpperCase()} Products `} />
      <Loading status={loading} error={error}>
        <GridList
          records={productInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
