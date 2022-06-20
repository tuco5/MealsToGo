import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantsContext } from "../contexts/Restaurants.context";
import { SafeArea } from "../utils/SafeArea";
import RestaurantInfoCard from "../components/RestaurantInfoCard.component";
import Search from "../components/Search.component";

import { RestaurantList, Loading, ErrorContainer } from "./Restaurants.styles";
import { Text } from "../utils/Text.component";

export default function RestaurantsScreen({ navigation }) {
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
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.placeId}
        />
      )}
    </SafeArea>
  );
}
