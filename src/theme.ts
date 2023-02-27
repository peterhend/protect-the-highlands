import { createTheme } from "@mui/material/styles";

/**
 * First, define the basic design options.
 */

export let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // purples (https://material.io/inline-tools/color/ with #2E3091 as primary)
      dark: "#211d7c", // 900
      main: "#2E3091", // 800 (dark purple)
      light: "#e8e9f6", // 50
    },
    secondary: {
      // grays
      dark: "#1C1D20", // black used by design
      main: "#404040", // for dark gray icons, tree paths, etc.
      light: "#f6f6f6", // for shaded backgrounds
    },
    text: {
      primary: "#404040",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: 16,
      letterSpacing: 0,
      color: "purple",
    },
  },
});

/**
 * Then use these design options to compose other options
 * or to override the design of specific components.
 */

theme = createTheme(theme, {
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          paddingTop: "0 !important",
          paddingBottom: "0 !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // marginLeft: 8,
          // marginRight: 8,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderRadius: 0,
          height: 140,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 8,
          marginTop: "0 !important",
        },
      },
    },
  },
});
