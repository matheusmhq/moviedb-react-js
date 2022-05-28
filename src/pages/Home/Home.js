import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Card from "components/Card";
import { setParamsUrl, getUrlParameter } from "functions/utils";
import { getList } from "./js/api";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(getUrlParameter("page", 1));
  const [lastPage, setLastPage] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getListTemp();
  }, [page]);

  function getListTemp() {
    var obj = {
      params: [
        {
          name: "page",
          value: page,
        },
      ],
    };
    setParamsUrl(navigate, obj);
    getList(page, setLastPage, setTotalResults, setList, setLoading);
  }

  return (
    <Container fluid>
      <Row>
        {list.map((item, index) => {
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
        })}
      </Row>
    </Container>
  );
};

export default Home;
