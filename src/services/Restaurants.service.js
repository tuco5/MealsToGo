import camelize from "camelize";

import { mocks } from "../mocks/restaurants";
import { mockImages } from "../mocks/restaurants";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    // If location not null but not found reject
    const locLatLng = `${location.lat},${location.lng}`;
    const mock = mocks[locLatLng];
    if (!mock) {
      reject("Not Found");
    }

    // Resolve
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      photos: mockImages,
    };
  });
  return camelize(mappedResults);
};
