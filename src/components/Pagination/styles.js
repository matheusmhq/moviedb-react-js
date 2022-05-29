import styled from "styled-components";

import colors from "styles/colors";

export const Container = styled.div`
  .info-pages {
    color: ${colors.darkestGray};
    font-weight: bold;
  }

  .info-results {
    color: ${colors.darkGray};
  }

  .page-item.active .page-link {
    background-color: ${colors.lightBlue} !important;
    color: white !important;
    border: none;
  }

  .page-link {
    color: ${colors.lightBlue} !important;
  }
`;
