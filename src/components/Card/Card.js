import React from "react";
import { Card as CardComponent } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

import * as S from "./styles";
import { getImage } from "functions/utils";
import CircularProgressbar from "components/CircularProgressbar";

const Card = ({ id, title, posterPath, releaseDate, voteAverage }) => {
  return (
    <S.Card xs={6} sm={4} lg={3} className="mb-3">
      <CardComponent className="h-100">
        <Link to={""} className="position-relative">
          <CardComponent.Img
            title={title}
            alt={title}
            variant="top"
            src={getImage(posterPath)}
          />
          <CircularProgressbar voteAverage={voteAverage} />
        </Link>
        <CardComponent.Body>
          <Link to={""} title={title} alt={title}>
            <CardComponent.Title>{title}</CardComponent.Title>
          </Link>
          <CardComponent.Text>
            {moment(releaseDate).format("ll")}
          </CardComponent.Text>
        </CardComponent.Body>
      </CardComponent>
    </S.Card>
  );
};

export default Card;
