import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 60px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #1d1d1d;
        font-family: 'Noto Sans KR', sans-serif;
        color: #fff;
        letter-spacing: -1px;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
`;
