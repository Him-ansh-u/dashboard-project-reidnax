import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
        black: {
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
        },
        background: {
          100: "#333232",
          200: "#666464",
          300: "#999696",
          400: "#ccc8c8",
          500: "#fffafa",
          600: "#fffbfb",
          700: "#fffcfc",
          800: "#fffdfd",
          900: "#fffefe",
        },
        primary: {
          100: "#040033",
          200: "#080066",
          300: "#0d0099",
          400: "#1100cc",
          500: "#1500ff",
          600: "#4433ff",
          700: "#7366ff",
          800: "#a199ff",
          900: "#d0ccff",
        },
        secondary: {
          100: "#2a2a2a",
          200: "#545454",
          300: "#7d7d7d",
          400: "#a7a7a7",
          500: "#d1d1d1",
          600: "#dadada",
          700: "#e3e3e3",
          800: "#ededed",
          900: "#f6f6f6",
        },
        accent: {
          100: "#2f0b0b",
          200: "#5e1616",
          300: "#8d2121",
          400: "#bc2c2c",
          500: "#eb3737",
          600: "#ef5f5f",
          700: "#f38787",
          800: "#f7afaf",
          900: "#fbd7d7",
        },
      }
    : {
        black: {
          100: "#cccccc",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        background: {
          100: "#fffefe",
          200: "#fffdfd",
          300: "#fffcfc",
          400: "#fffbfb",
          500: "#fffafa",
          600: "#ccc8c8",
          700: "#999696",
          800: "#666464",
          900: "#333232",
        },
        primary: {
          100: "#d0ccff",
          200: "#a199ff",
          300: "#7366ff",
          400: "#4433ff",
          500: "#1500ff",
          600: "#1100cc",
          700: "#0d0099",
          800: "#080066",
          900: "#040033",
        },
        secondary: {
          100: "#f6f6f6",
          200: "#ededed",
          300: "#e3e3e3",
          400: "#dadada",
          500: "#d1d1d1",
          600: "#a7a7a7",
          700: "#7d7d7d",
          800: "#545454",
          900: "#2a2a2a",
        },
        accent: {
          100: "#fbd7d7",
          200: "#f7afaf",
          300: "#f38787",
          400: "#ef5f5f",
          500: "#eb3737",
          600: "#bc2c2c",
          700: "#8d2121",
          800: "#5e1616",
          900: "#2f0b0b",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            text: {
              main: colors.black[100],
            },
            secondary: {
              main: colors.secondary[100],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.background[400],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            text: {
              main: colors.black[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.background[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Robot", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Robot", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Robot", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
