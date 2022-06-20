import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RestaurantsScreen from "../screens/Restaurants.screen";
import DetailsScreen from "../screens/Details.screen";

const RestaurantsStack = createNativeStackNavigator();

export default function RestaurantsNavigator() {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantsStack.Screen name="List" component={RestaurantsScreen} />
      <RestaurantsStack.Screen name="Details" component={DetailsScreen} />
    </RestaurantsStack.Navigator>
  );
}
