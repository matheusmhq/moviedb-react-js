import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import Loading from "components/Loading";
import Card from "components/Card";
import { setParamsUrl, getUrlParameter } from "functions/utils";
import { getList } from "./js/api";
import Pagination from "components/Pagination";
import MsgEmpty from "components/MsgEmpty";

const msg =
  "Nenhum resultado foi encontrado \nVerifique se o nome digitado está correto";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [lastPage, setLastPage] = useState(null);
  const [totalResults, setTotalResults] = useState(null);

  const query = getUrlParameter("query", "");
  const page = getUrlParameter("page", 1);

  function setPage(value) {
    navigate(`/?page=${value}&query=${query}`);
  }

  useEffect(() => {
    getListTemp();
  }, [page, query]);

  function getListTemp() {
    const obj = {
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
        <div className="container-title-movies">
          {query ? (
            <h2>
              Pesquisando por: <span>{query}</span>
            </h2>
          ) : (
            <h2>
              Filmes <span>Populares</span>
            </h2>
          )}
        </div>

        {loading ? (
          <Loading />
        ) : list.length == 0 ? (
          <MsgEmpty msg={msg} />
        ) : (
          list.map((item, index) => {
            return (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                imagePath={item.poster_path}
                subtitle={
                  item.release_date
                    ? moment(item.release_date).format("ll")
                    : ""
                }
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
