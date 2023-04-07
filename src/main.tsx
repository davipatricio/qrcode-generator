import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { useTheme } from "./hooks/useTheme";
import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
