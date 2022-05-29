import React from "react";
import { Spinner } from "react-bootstrap";

import * as S from "./styles";

const Loading = ({ customStyles, customClass, animation, variant, size }) => {
  return (
    <S.Container
      style={customStyles}
      className={`container-loading d-flex justify-content-center align-items-center ${customClass}`}
    >
      <Spinner
        animation={animation || "border"}
        role="status"
        variant={variant || "primary"}
        size={size || "md"}
      />
    </S.Container>
  );
};

export default Loading;
