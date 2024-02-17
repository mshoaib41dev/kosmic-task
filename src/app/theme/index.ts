"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const lightTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "inherit",
    },
    palette: {
      mode: "light",
      primary: {
        main: "#523FD7",
      },
      secondary: {
        main: "#FF7DFF",
      },

      text: {
        primary: "#12111A",
        secondary: "#616066",
      },
      divider: "#D0CFD1",

      background: { default: "#FFFFFF", paper: "#f5f5f5", input: '#f5f5f5', dropdown: '#f5f5f5' },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 745,
        lg: 1440,
        xl: 1728,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            color: "#3A3940",
            borderColor: "#3A3940",
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        },
      },
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "inherit",
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#523FD7",
      },
      secondary: {
        main: "#FF7DFF",
      },

      text: {
        primary: "#FFFFFF",
        secondary: "#D0CFD1",
      },
      divider: "#3A3940",

      background: { default: "#12111A", paper: "#09090D", input: 'rgba(58, 57, 64, 1)', dropdown: 'rgba(58, 57, 64, 0.5)' },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 745,
        lg: 1440,
        xl: 1728,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            color: "#fff",
            borderColor: "#3A3940",
            paddingTop: "8px",
            paddingBottom: "8px",
          },
        },
      },
    },
  })
);
