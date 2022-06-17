import { FlatList } from "react-native";
import { Colors, ActivityIndicator } from "react-native-paper";

import styled from "styled-components";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const Loading = styled(ActivityIndicator).attrs({
  animation: true,
  color: Colors.blue300,
  size: "large",
})`
  margin-top: 50%;
`;
