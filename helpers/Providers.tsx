"use client";

import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FC6011",
      contrastText: "#F0F5F9",
    },
    secondary: {
      main: "#252525",
      // main: "#52616B",
      contrastText: "#11263C",
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
      // fontFamily: "Intel",
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
