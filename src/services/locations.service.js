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
  const { geometry = {} } = camelizeResults.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
