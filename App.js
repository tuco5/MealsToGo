import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Restaurants from "./src/screens/Restaurants.screen";

export default function App() {
  return (
    <>
      <Restaurants />
      <ExpoStatusBar style="auto" />
    </>
  );
}
