import React from "react";
import { Card as CardComponent } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as S from "./styles";
import { getImage } from "functions/utils";

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
          {/* <div className="container-rating">
            <CircularProgressbar
              strokeWidth={7}
              styles={buildStyles({
                textSize: "28px",
                pathColor: GetColorRating(Math.floor(voteAverage)),
                textColor: "white",
                trailColor: HexToRgbA(
                  GetColorRating(Math.floor(voteAverage)),
                  0.3
                ),
                backgroundColor: "black",
              })}
              background={true}
              backgroundPadding={true}
              value={Math.floor(voteAverage) * 10}
              text={`${Math.floor(voteAverage) * 10}%`}
            />
          </div> */}
        </Link>
        <CardComponent.Body>
          <Link to={""} title={title} alt={title}>
            <CardComponent.Title>{title}</CardComponent.Title>
          </Link>
          <CardComponent.Text>{releaseDate}</CardComponent.Text>
        </CardComponent.Body>
      </CardComponent>
    </S.Card>
  );
};

export default Card;
