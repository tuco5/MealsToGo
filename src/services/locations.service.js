import camelize from "camelize";

import { locations } from "../mocks/locations";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    !locationMock && reject("Not Found");
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const camelizeResults = camelize(result);
  const {
    geometry: {
      location: { lat, lng },
    },
  } = camelizeResults.results[0];

  return { lat, lng };
};
