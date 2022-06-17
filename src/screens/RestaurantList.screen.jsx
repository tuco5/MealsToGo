import React, { useContext } from "react";

import { RestaurantsContext } from "../contexts/Restaurants.context";
import { SafeArea } from "../utils/SafeArea";
import RestaurantInfoCard from "../components/RestaurantInfoCard.component";
import Search from "../components/Search.component";

import { RestaurantList, Loading } from "./RestaurantList.styles";

export default function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && <Loading />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.placeId}
      />
    </SafeArea>
  );
}
