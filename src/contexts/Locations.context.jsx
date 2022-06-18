import React, { useState, createContext, useEffect } from "react";

import {
  locationRequest,
  locationTransform,
} from "../services/locations.service";

export const LocationsContext = createContext();

export default function LocationContextProvider({ children }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("37.7749295,-122.4194155");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keyword) return;
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(`${result.lat},${result.lng}`);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setLocation("");
        setError(err);
      });
  }, [keyword]);

  const handleSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  return (
    <LocationsContext.Provider
      value={{
        isLoading,
        error,
        location,
        keyword,
        onSearch: handleSearch,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
}
