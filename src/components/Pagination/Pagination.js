import React from "react";
import { Pagination as PaginationComponent, Col } from "react-bootstrap";

import * as S from "./styles";

const qtyOfPagesOnLeftOfCurrent = 1;
const qtyOfPagesOnRightOfCurrent = 3;

const Pagination = ({ setPage, page, totalResults, lastPage, loading }) => {
  function handlePages() {
    page = Number(page);
    lastPage = Number(lastPage);

    var pages = [];

    //Pages on left of current
    var first = page > 1 ? page - qtyOfPagesOnLeftOfCurrent : page;

    //Pages on right of current
    var last = lastPage > 1 ? page + qtyOfPagesOnRightOfCurrent : 1;
    if (last > lastPage) last = lastPage;

    for (let i = first; i <= last; i++) {
      pages.push(
        <PaginationComponent.Item
          onClick={() => setPage(i)}
          key={i}
          active={i == page}
        >
          {i}
        </PaginationComponent.Item>
      );
    }
    return pages;
  }

  if (loading || totalResults == 0) return;

  return (
    <S.Container className="d-flex flex-wrap my-2 my-md-5">
      <Col xs={12} md={4}>
        <div className="container-info-results d-flex flex-column align-items-center align-items-md-start">
          <p className="mb-0 info-pages">
            Página {page} de {lastPage}
          </p>
          <p className="info-results">{totalResults} resultado(s)</p>
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className="d-flex justify-content-center">
          <PaginationComponent>
            {page > 1 && (
              <PaginationComponent.First
                title="Voltar para primeira página"
                onClick={() => setPage(1)}
              />
            )}
            {handlePages()}
            {page < lastPage && (
              <PaginationComponent.Last
                title="Ir para última página"
                onClick={() => setPage(lastPage)}
              />
            )}
          </PaginationComponent>
        </div>
      </Col>

      <Col xs={12} md={4} />
    </S.Container>
  );
};

export default Pagination;
