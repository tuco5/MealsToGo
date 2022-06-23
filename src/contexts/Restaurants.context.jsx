import React, { useState, createContext, useContext, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "../services/restaurants.service";
import { LocationContext } from "./Location.context";

export const RestaurantsContext = createContext();

export default function RestaurantsContextProvider({ children }) {
  const { location } = useContext(LocationContext);

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
          setError(null);
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useMemo(() => fetchRestaurants(location), [location]);

  return (
    <RestaurantsContext.Provider value={{ isLoading, error, restaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
}
