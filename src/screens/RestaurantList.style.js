import { View, FlatList } from "react-native";
import styled from "styled-components";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space.lg};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
