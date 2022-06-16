import React from "react";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../utils/SafeArea";
import RestaurantInfoCard from "../components/RestaurantInfoCard";

import { SearchContainer, RestaurantList } from "./restaurant-list-screen";

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{ id: 1 }, { id: 2 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
}
