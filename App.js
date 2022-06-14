import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import Restaurants from "./src/screens/Restaurants.screen";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular });

  if (!fontsLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Restaurants />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
