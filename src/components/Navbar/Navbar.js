import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import logo from "assets/images/logo.png";
import * as S from "./styles";
import Icon from "components/Icon";
import { getUrlParameter } from "functions/utils";
import { useDebounce, useComponentDidMount } from "functions/hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const isComponentMounted = useComponentDidMount();
  const [query, setQuery] = useState(getUrlParameter("query", ""));

  function search() {
    navigate(`/?page=1&query=${query}`);
  }

  useDebounce(
    () => {
      if (isComponentMounted) search();
    },
    [query],
    500
  );

  return (
    <S.Container className="p-3 mb-5">
      <div className="container-nav">
        <Link to="/">
          <img title="Tmdb" alt="Tmdb" className="logo" src={logo} />
        </Link>
        <div className="container-search">
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-default">
              <Icon name="magnify" />
            </InputGroup.Text>
            <FormControl
              placeholder="Pesquisar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
    </S.Container>
  );
};

export default Navbar;
