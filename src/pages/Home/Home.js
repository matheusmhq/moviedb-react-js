import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Loading from "components/Loading";
import Card from "components/Card";
import { setParamsUrl, getUrlParameter } from "functions/utils";
import { getList } from "./js/api";
import Pagination from "components/Pagination";

const Home = () => {
  const navigate = useNavigate();
  const query = getUrlParameter("query", "");
  const page = getUrlParameter("page", 1);
  function setPage(value) {
    navigate(`/?page=${value}&query=${query}`);
  }

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [lastPage, setLastPage] = useState(null);
  const [totalResults, setTotalResults] = useState(null);

  useEffect(() => {
    getListTemp();
  }, [page, query]);

  function getListTemp() {
    var obj = {
      params: [
        {
          name: "page",
          value: page,
        },
        {
          name: "query",
          value: query,
        },
      ],
    };
    setParamsUrl(navigate, obj);
    getList(query, page, setLastPage, setTotalResults, setList, setLoading);
  }

  return (
    <Container fluid>
      <Row>
        {loading ? (
          <Loading />
        ) : (
          list.map((item, index) => {
            return (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                posterPath={item.poster_path}
                releaseDate={item.release_date}
                voteAverage={item.vote_average}
              />
            );
          })
        )}
        <Pagination
          setPage={setPage}
          page={page}
          totalResults={totalResults}
          lastPage={lastPage}
          loading={loading}
        />
      </Row>
    </Container>
  );
};

export default Home;
