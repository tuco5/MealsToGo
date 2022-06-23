import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";

import { LocationContext } from "../contexts/Location.context";
import { RestaurantsContext } from "../contexts/Restaurants.context";

import Search from "../components/Search.component";
import MapCallout from "../components/MapCallout.component";

import { Map, SearchContainer } from "./Map.styles";

export default function MapScreen({ navigation }) {
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [viewport]);

  return (
    <>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("Details", { ...restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
}
