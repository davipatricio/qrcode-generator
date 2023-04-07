import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-family: Inter, Helvetica, Arial, sans-serif;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    
    @media (prefers-color-scheme: dark) {
      color-scheme: dark light;
    }
  }

  body {
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }

  * {
    margin: 0;
    padding: 0;
    transition: background-color 1.5s, color 0.1s, border-color 1s;

    &, &::before, &::after {
      box-sizing: border-box;
    }
  }
`;
