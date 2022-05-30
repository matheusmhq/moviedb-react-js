import React from "react";

import * as S from "./styles";

const MsgEmpty = ({ msg }) => {
  return (
    <S.Container>
      <p>{msg || "Nenhum resultado encontrado"}</p>
    </S.Container>
  );
};

export default MsgEmpty;
