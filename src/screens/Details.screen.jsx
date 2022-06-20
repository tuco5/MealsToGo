import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { SafeArea } from "../utils/SafeArea";
import RestaurantInfoCard from "../components/RestaurantInfoCard.component";

function BreakfastIcon(props) {
  return <List.Icon {...props} icon="bread-slice" />;
}
function LunchIcon(props) {
  return <List.Icon {...props} icon="hamburger" />;
}
function DinnerIcon(props) {
  return <List.Icon {...props} icon="food-variant" />;
}
function DrinksIcon(props) {
  return <List.Icon {...props} icon="cup" />;
}

export default function DetailsScreen({ route }) {
  const restaurant = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const resetAccordions = () => {
    setBreakfastExpanded(false);
    setLunchExpanded(false);
    setDinnerExpanded(false);
    setDrinksExpanded(false);
  };

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={BreakfastIcon}
          expanded={breakfastExpanded}
          onPress={() => {
            resetAccordions();
            setBreakfastExpanded(!breakfastExpanded);
          }}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={LunchIcon}
          expanded={lunchExpanded}
          onPress={() => {
            resetAccordions();
            setLunchExpanded(!lunchExpanded);
          }}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={DinnerIcon}
          expanded={dinnerExpanded}
          onPress={() => {
            resetAccordions();
            setDinnerExpanded(!dinnerExpanded);
          }}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={DrinksIcon}
          expanded={drinksExpanded}
          onPress={() => {
            resetAccordions();
            setDrinksExpanded(!drinksExpanded);
          }}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
}
