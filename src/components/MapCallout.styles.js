import React from "react";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const IosImage = styled.Image`
  border-radius: 4px;
  width: 120px;
  height: 100px;
`;

const AndroidImageContainer = styled.View`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  overflow: hidden;
`;

export const AndroidImage = ({ source }) => (
  <AndroidImageContainer>
    <WebView source={source} />
  </AndroidImageContainer>
);
