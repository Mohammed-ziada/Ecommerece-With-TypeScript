// import { TCategory } from "@customTypes/category";
import Empty from "@components/feedback/Empty/Empty";
import React from "react";
import { Col, Row } from "react-bootstrap";
import emptyImage from "@assets/Empty.png";
type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};
type hasId = { id?: string };
const GridList = <T extends hasId>({
  records,
  renderItem,
}: GridListProps<T>) => {
  const categoryList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={6}
          md={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <Empty message="No Items" logoSrc={emptyImage} />
    );
  return (
    <div>
      <Row>{categoryList}</Row>
    </div>
  );
};
export default GridList;
