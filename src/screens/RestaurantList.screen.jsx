import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";

import { RestaurantsContext } from "../contexts/Restaurants.context";
import { SafeArea } from "../utils/SafeArea";
import RestaurantInfoCard from "../components/RestaurantInfoCard.component";

import {
  SearchContainer,
  RestaurantList,
  Loading,
} from "./RestaurantList.styles";

export default function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      {isLoading && <Loading />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.placeId}
      />
    </SafeArea>
  );
}
