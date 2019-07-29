import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
    }

    body {
        font-family: sans-serif;
        background-color: #fffcf2;
        color: #4b5454;
    }
`;
