import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
:root {
  --font-primary: 'Newsreader', Arial, sans-serif;
  --font-secondary: 'Roboto', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Newsreader, Arial;
}

html, body {
  overflow-x: hidden;
  background-color: #e6e6e6;
  width: auto;
}

body {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;   
  height: 100vh;
}

#root {
  width: 100%;
}
`;
