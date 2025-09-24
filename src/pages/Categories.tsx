import { Category } from "@components/ecommerce";
import { Container } from "react-bootstrap";
import { GridList } from "@components/common";

import Loading from "@components/feedback/Loading/Loading";
import useCategory from "@hooks/useCategory";

const Categories = () => {
  const { error, loading, records } = useCategory();
  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
