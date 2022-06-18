import React, { useContext } from "react";

import { RestaurantsContext } from "../contexts/Restaurants.context";
import { SafeArea } from "../utils/SafeArea";
import RestaurantInfoCard from "../components/RestaurantInfoCard.component";
import Search from "../components/Search.component";

import {
  RestaurantList,
  Loading,
  ErrorContainer,
} from "./RestaurantList.styles";
import { Text } from "../components/Text.component";

export default function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && <Loading />}
      {error && !isLoading ? (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </SafeArea>
  );
}
