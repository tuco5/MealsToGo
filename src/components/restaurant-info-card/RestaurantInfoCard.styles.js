import { Image } from "react-native";
import { Card } from "react-native-paper";

import styled from "styled-components";

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const Info = styled.View`
  padding: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.ui.primary};
`;
export const Section = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.md};
`;
export const Rating = styled.View`
  flex-direction: row;
`;
export const OpenIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const CategoryIcon = styled(Image)`
  width: 15px;
  height: 15px;
  margin-left: ${({ theme }) => theme.space.md};
  align-self: center;
`;
