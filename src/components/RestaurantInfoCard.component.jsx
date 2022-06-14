import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import styled from "styled-components";
import star from "../../assets/star";
import open from "../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.lg};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space.lg};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Section = styled(View)`
  flex: auto;
  align-items: center;
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.md};
  padding-bottom: ${(props) => props.theme.space.md};
`;
const Rating = styled(View)`
  flex-direction: row;
`;
const OpenIcon = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const CloseTemporarily = styled(Text)`
  padding-right: ${(props) => props.theme.space.md};
  color: ${(props) => props.theme.colors.text.error};
`;
const CategoryIcon = styled(Image)`
  width: 15px;
  height: 15px;
  margin-left: ${(props) => props.theme.space.md};
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    address = "100 You Pura Mura",
    isOpen = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((el, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <OpenIcon>
            {isClosedTemporarily ? (
              <CloseTemporarily variant="label">
                CLOSE TEMPORARILY
              </CloseTemporarily>
            ) : (
              isOpen && <SvgXml xml={open} width={20} height={20} />
            )}
            <CategoryIcon source={{ uri: icon }} />
          </OpenIcon>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
