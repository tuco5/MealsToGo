import MapView from "react-native-maps";

import styled from "styled-components/native";

export const Map = styled(MapView)`
  flex: 1;
`;

export const SearchContainer = styled.View`
  position: absolute;
  z-index: 10;
  top: 20px;
  width: 100%;
`;
