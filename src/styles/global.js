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

    .btn-no-styles {
        background-color: transparent;
        border: none;
    }

    .container-title-movies {
        margin: 26px 0 30px 0;
        h2 {
            font-weight: bold;
            span {
                color: ${colors.lightBlue};
                
            }
        }
    }
`;
