import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import imgNotFound from "assets/images/not-found.svg";
import * as S from "./styles";

const NotFound = () => {
  return (
    <S.Container>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <h1>Ooops!</h1>
            <p className="my-4">404 - PÁGINA NÃO ENCONTRADA</p>
            <p className="message">Essa página não existe ou foi removida.</p>
            <Link to="/" className="btn btn-primary mt-4">
              Voltar para a Home
            </Link>
          </Col>

          <Col md={6} className="d-none d-md-block">
            <img src={imgNotFound} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </S.Container>
  );
};

export default NotFound;
