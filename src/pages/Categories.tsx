import { Category } from "@components/ecommerce";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { GridList } from "@components/common";
import { useAppDispatch } from "@store/hooks";
import { actCategories } from "@store/categories/categoriesSlice";
import { useAppSelector } from "@store/hooks";
import Loading from "@components/feedback/Loading/Loading";
const Categories = () => {
  const dipatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      dipatch(actCategories());
    }
  }, [dipatch, records]);

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
