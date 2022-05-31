import React from "react";
import { Card as CardComponent } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as S from "./styles";
import { getImage } from "functions/utils";
import CircularProgressbar from "components/CircularProgressbar";

const Card = ({
  id,
  title,
  imagePath,
  subtitle,
  voteAverage,
  disableOnClick,
}) => {
  return (
    <S.Card xs={6} sm={4} lg={3} className="mb-3" data-testid="card">
      <CardComponent className="h-100">
        <Link
          to={disableOnClick || `/details/${id}`}
          className="position-relative"
        >
          <CardComponent.Img
            title={title}
            alt={title}
            variant="top"
            src={getImage(imagePath)}
          />
          {(voteAverage || voteAverage == 0) && (
            <CircularProgressbar voteAverage={voteAverage} />
          )}
        </Link>
        <CardComponent.Body>
          <Link
            to={disableOnClick || `/details/${id}`}
            title={title}
            alt={title}
          >
            <CardComponent.Title>{title}</CardComponent.Title>
          </Link>
          <CardComponent.Text>{subtitle}</CardComponent.Text>
        </CardComponent.Body>
      </CardComponent>
    </S.Card>
  );
};

export default Card;
