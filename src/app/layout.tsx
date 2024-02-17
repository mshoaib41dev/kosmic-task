"use client";
import "./globals.css";
import { ChangeEvent, useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import {
  ThemeProvider,
  CssBaseline,
  Switch,
  FormControlLabel,
} from "@mui/material";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [theme, setTheme] = useState(useDarkTheme ? lightTheme : darkTheme);

  const changeThemeHandler = (currentValue: boolean) => {
    setUseDarkTheme(currentValue);
    setTheme(currentValue ? lightTheme : darkTheme);
  };
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={poppins.className} >
          <CssBaseline />
          <Header changeThemeHandler={changeThemeHandler} isDarkTheme={useDarkTheme} />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
