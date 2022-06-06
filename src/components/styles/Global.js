import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body{
    background:#c5c4c4;
    font-size:14px;
  }
  button:disabled,
  button[disabled]{
    background-color: #BBCFFB;
  }
  button:hover:enabled{
    background-color: #BBCFFB;
  }
  button[disabled]:hover {
    background-color: #BBCFFB;
}
  
`
