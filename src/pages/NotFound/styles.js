import styled from "styled-components";

import colors from "styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6em;

  h1 {
    font-weight: bold;
    font-size: 5em;
  }

  .message {
    font-weight: bold;
    font-size: 16px;
  }

  .btn {
    background-color: ${colors.brandBlue};
    border: none;
  }

  img {
    max-width: 500px;
    width: 100%;
  }
`;
