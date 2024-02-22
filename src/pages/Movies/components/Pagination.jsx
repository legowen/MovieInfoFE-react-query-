import React from "react";
// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Paginate
import ReactPaginate from "react-paginate";

const Pagination = ({ data, page, setPage }) => {
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <Row className="pagination_list">
      <Col>
        <ReactPaginate
          onPageChange={handlePageClick}
          containerClassName="pagination"
          renderOnZeroPageCount={null}
          breakLinkClassName="page-link"
          forcePage={page - 1}
          activeClassName="active"
          previousLabel="<"
          nextLabel=">"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          pageRangeDisplayed={3}
          marginPagesDisplayed={0}
          pageCount={data && data.total_pages}
          pageLinkClassName="page-link"
        />
      </Col>
    </Row>
  );
};

export default Pagination;