import React from "react";
import {
  CircularProgressbar as CircularProgressbarComponent,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { hexToRgbA, getColorRating } from "functions/utils";
import * as S from "./styles";
import colors from "styles/colors";

const CircularProgressbar = ({ voteAverage }) => {
  const voteAverageFloor = Math.floor(voteAverage);
  const styles = buildStyles({
    textSize: "28px",
    pathColor: getColorRating(voteAverageFloor),
    textColor: colors.white,
    trailColor: hexToRgbA(getColorRating(voteAverageFloor), 0.3),
    backgroundColor: colors.black,
  });

  return (
    <S.Container>
      <CircularProgressbarComponent
        strokeWidth={7}
        styles={styles}
        background={true}
        backgroundPadding={true}
        value={voteAverageFloor * 10}
        text={`${voteAverageFloor * 10}%`}
      />
    </S.Container>
  );
};

export default CircularProgressbar;
