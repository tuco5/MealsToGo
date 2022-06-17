import React, { useState, createContext, useContext, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "../services/restaurants.service";
import { LocationsContext } from "./Locations.context";

export const RestaurantsContext = createContext();

export default function RestaurantContextProvider({ children }) {
  const { location } = useContext(LocationsContext);

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurants = (loc) => {
    setRestaurants([]);
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  console.log("restaurant context =>", location);

  useMemo(() => fetchRestaurants(location), [location]);

  return (
    <RestaurantsContext.Provider value={{ isLoading, error, restaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
}
