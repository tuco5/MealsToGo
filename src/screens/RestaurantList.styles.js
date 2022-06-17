import { View, FlatList } from "react-native";
import { Colors, ActivityIndicator } from "react-native-paper";

import styled from "styled-components";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space.lg};
`;

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
