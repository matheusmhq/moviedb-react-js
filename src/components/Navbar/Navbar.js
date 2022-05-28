import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "assets/images/logo.png";
import * as S from "./styles";
import Icon from "components/Icon";

const Navbar = () => {
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
            <FormControl placeholder="Pesquisar" />
          </InputGroup>
        </div>
      </div>
    </S.Container>
  );
};

export default Navbar;
