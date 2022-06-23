import React, { useState, createContext, useEffect } from "react";

import {
  locationRequest,
  locationTransform,
} from "../services/locations.service";

export const LocationContext = createContext();

export default function LocationContextProvider({ children }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState({
    lat: 51.219448,
    lng: 4.402464,
    viewport: {
      northeast: {
        lat: 51.2145994302915,
        lng: 4.418074130291502,
      },
      southwest: {
        lat: 51.2119014697085,
        lng: 4.415376169708497,
      },
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keyword) return;
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
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
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        keyword,
        onSearch: handleSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
