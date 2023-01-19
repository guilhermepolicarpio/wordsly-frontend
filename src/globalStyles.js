import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aaaaaa;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    padding: 3vh;
    display: flex;
    background-image: linear-gradient(109.6deg, #DECBA4, #3E5151);

   & > * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
  }
`;

export default GlobalStyle;