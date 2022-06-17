import camelize from "camelize";

import { mocks } from "../mocks/restaurants";
import { mockImages } from "../mocks/restaurants";

export const restaurantsRequest = (location) => {
  console.log("restaurant service =>", location);
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
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
