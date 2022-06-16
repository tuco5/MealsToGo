import React from "react";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../utils/SafeArea";
import RestaurantInfoCard from "../components/RestaurantInfoCard.component";

import { SearchContainer, RestaurantList } from "./RestaurantList.style";

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
