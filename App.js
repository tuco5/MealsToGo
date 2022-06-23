import React from "react";
import { ThemeProvider } from "styled-components";

import RestaurantsContextProvider from "./src/contexts/Restaurants.context";
import LocationContextProvider from "./src/contexts/Location.context";
import Navigation from "./src/routes";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
