import React, { useMemo } from "react";
import { SvgXml } from "react-native-svg";

import { Text } from "../utils/Text.component";

import star from "../../assets/star";
import open from "../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  OpenIcon,
  CategoryIcon,
} from "./RestaurantInfoCard.styles";

export default function RestaurantInfoCard({ restaurant }) {
  const {
    name = "Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    vicinity = "100 You Pura Mura",
    isOpen = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  const randomPhotoIndex = useMemo(
    () => Math.floor(Math.random() * photos.length),
    [photos]
  );

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[randomPhotoIndex] }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`${index}-${placeId}`}
              />
            ))}
          </Rating>
          <OpenIcon>
            {isClosedTemporarily ? (
              <Text variant="error">CLOSE TEMPORARILY</Text>
            ) : (
              isOpen && <SvgXml xml={open} width={20} height={20} />
            )}
          </OpenIcon>
          <CategoryIcon source={{ uri: icon }} />
        </Section>
        <Text variant="caption">{vicinity}</Text>
      </Info>
    </RestaurantCard>
  );
}
