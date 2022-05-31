import styled from "styled-components";

import colors from "styles/colors";

export const Container = styled.div`
  display: flex;

  a {
    color: ${colors.darkestGray};
    margin-right: 22px;
    font-size: 2em;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: ${colors.darkestGray};
    }
  }
`;
