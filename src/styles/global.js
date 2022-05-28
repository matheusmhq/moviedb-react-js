import { createGlobalStyle } from "styled-components";

import colors from "./colors";

export default createGlobalStyle`
    body {
    background-color:${colors.cultured};
    }

    .container-fluid {
        max-width: 1144px;
    }

    a {
        text-decoration: none;
    }
`;
