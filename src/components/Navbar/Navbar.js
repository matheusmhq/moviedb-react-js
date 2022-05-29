import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "assets/images/logo.png";
import * as S from "./styles";
import Icon from "components/Icon";
import { getUrlParameter } from "functions/utils";
import {
  useDebounce,
  useComponentDidMount,
  usePathname,
} from "functions/hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const pathname = usePathname();
  const isComponentMounted = useComponentDidMount();
  const [query, setQuery] = useState(getUrlParameter("query", ""));

  function search() {
    navigate(`/?page=1&query=${query}`);
  }

  function goToHome() {
    if (pathname == "/") return;
    navigate("/");
  }

  useDebounce(
    () => {
      if (isComponentMounted) search();
    },
    [query],
    500
  );

  return (
    <S.Container className="p-3">
      <div className="container-nav">
        <button className="btn-no-styles" onClick={goToHome}>
          <img title="Tmdb" alt="Tmdb" className="logo" src={logo} />
        </button>
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
