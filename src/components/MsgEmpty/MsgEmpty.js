import React from "react";

import * as S from "./styles";

const MsgEmpty = ({ msg }) => {
  return (
    <S.Container data-atestid="msg-empty">
      <p>{msg || "Nenhum resultado encontrado"}</p>
    </S.Container>
  );
};

export default MsgEmpty;
