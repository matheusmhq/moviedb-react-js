import styled from "styled-components";

import colors from "styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.brandBlue};

  .logo {
    width: 76px;
  }

  .container-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1144px;
    background-color: ${colors.brandBlue} !important;

    @media screen and (max-width: 500px) {
      flex-direction: column;

      .container-search {
        margin-top: 40px;
      }
    }
  }
`;
