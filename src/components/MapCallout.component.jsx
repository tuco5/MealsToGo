import React from "react";
import { Platform } from "react-native";

import { Text } from "../utils/Text.component";

import { Container, IosImage, AndroidImage } from "./MapCallout.styles";

const isAndroid = Platform.OS === "android";

export default function MapCallout({ restaurant }) {
  const Image = isAndroid ? AndroidImage : IosImage;
  return (
    <Container>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Container>
  );
}
