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

  input {
    width: 80%;
  }

  .container-btn-clear {
    background-color: ${colors.white};

    .btn-clear {
      background-color: transparent;
      position: absolute;
      right: 0;
      height: 100%;
      border-radius: 10px !important;
      z-index: 10;
    }
  }
`;
