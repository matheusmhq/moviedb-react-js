import styled from "styled-components";
import { Col } from "react-bootstrap";

import colors from "styles/colors";

export const Card = styled(Col)`
  .card-title {
    color: ${colors.darkestGray};
    margin-bottom: 2px;
    font-weight: bold;
    font-size: 16px;
  }

  .card-title:hover {
    color: ${colors.lightGlue};
  }

  .card-text {
    color: ${colors.darkGray};
    font-size: 14px;
    font-weight: bold;
  }
`;
