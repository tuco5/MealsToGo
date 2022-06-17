import React, { useState, createContext } from "react";

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

  const handleSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(`${result.lat},${result.lng}`);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
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
