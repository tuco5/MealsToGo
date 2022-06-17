import React, { useState, useEffect, useMemo, createContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "../services/Restaurants.service";

export const RestaurantsContext = createContext();

export default function RestaurantContextProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
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

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ isLoading, error, restaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
}
