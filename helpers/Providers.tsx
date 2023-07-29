"use client";

import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FC6011",
      contrastText: "#1F141D", //"#F0F5F9"
    },
    secondary: {
      main: "#A6B0C3",
      // main: "#52616B",
      contrastText: "#11263C",
    },
    common: {
      black: "#1F141D",
    },
  },
  typography: {
    h1: {
      color: "#11263C",
    },
    h2: {
      color: "#11263C",
    },
    h3: {
      color: "#11263C",
    },
    h4: {
      color: "#11263C",
    },
    h5: {
      color: "#11263C",
    },
    h6: {
      color: "#11263C",
    },
    subtitle1: {
      color: "#11263C",
    },
    subtitle2: {
      color: "#11263C",
    },
    body1: {
      color: "#11263C",
    },
    body2: {
      color: "#11263C",
      lineHeight: 1.5,
    },
    button: {
      color: "#F0F5F9",
      textTransform: "none",
      fontFamily: "inherit",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
