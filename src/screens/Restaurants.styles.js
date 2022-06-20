import { FlatList } from "react-native";
import { Colors, ActivityIndicator } from "react-native-paper";

import styled from "styled-components/native";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const ErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30%;
`;

export const Loading = styled(ActivityIndicator).attrs({
  animation: true,
  color: Colors.blue300,
  size: "large",
})`
  margin-top: 50%;
`;
