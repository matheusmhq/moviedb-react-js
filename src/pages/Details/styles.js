import styled from "styled-components";

import colors from "styles/colors";

export const ContainerTop = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 440px;
  color: white;

  .details-title {
    font-weight: bold;
    margin-bottom: 12px !important;

    span {
      font-weight: normal;
    }
  }

  .details-date {
    font-size: 18px;
    font-weight: 500;
  }

  .details-runtime {
    font-size: 18px;
    font-weight: 500;
  }

  .container-gender {
    p {
      font-size: 18px;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 767px) {
    .container-gender {
      &:before {
        content: "";
        display: block;
        margin: 0 10px;
        width: 6px;
        height: 6px;
        background-color: white;
        border-radius: 999px;
      }

      &:after {
        content: "";
        display: block;
        margin: 0 10px;
        width: 6px;
        height: 6px;
        background-color: white;
        border-radius: 999px;
      }
    }
  }

  .sinopse {
    font-weight: 500;
    line-height: 30px;
  }

  .btn-trailer {
    color: white;
    font-size: 18px;
    font-weight: bold;

    i {
      font-size: 26px;
    }

    @media screen and (min-width: 768px) {
      max-width: 200px;
    }
  }
`;

export const ContainerBottom = styled.div`
  .panel {
    h3 {
      font-weight: bold;
    }
  }

  .btn-more {
    color: ${colors.darkGray};
    font-weight: bold;
  }

  .info-item {
    margin-top: 20px;

    h3 {
      font-size: 24px;
      color: ${colors.black};
      font-weight: bold;
    }

    p {
      font-size: 18px;
      font-weight: 500;
    }

    .keyword {
      background-color: ${colors.lightGray};
      color: ${colors.darkerGray};
      padding: 4px 8px;
      border-radius: 6px;
      margin: 0 10px 10px 0;
      list-style-type: none;
      font-weight: bold;
    }
  }
`;
