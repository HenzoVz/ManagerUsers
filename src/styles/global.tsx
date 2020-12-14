import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 1.2rem Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
