import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import RestaurantContextProvider from "./src/contexts/Restaurants.context";
import Navigation from "./src/core/Navigation.component";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular });

  if (!fontsLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <Navigation />
        </RestaurantContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
