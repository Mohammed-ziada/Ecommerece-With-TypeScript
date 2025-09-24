import { useEffect } from "react";
import { useAppDispatch } from "@store/hooks";
import {
  actCategories,
  cleanUpRecords,
} from "@store/categories/categoriesSlice";
import { useAppSelector } from "@store/hooks";
const useCategory = () => {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promise = dispatch(actCategories());

    return () => {
      dispatch(cleanUpRecords());
      promise.abort();
    };
  }, [dispatch]);

  return { error, loading, records };
};

export default useCategory;
