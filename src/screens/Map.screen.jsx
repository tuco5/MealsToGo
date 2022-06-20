import React from "react";

import Search from "../components/Search.component";
import { Map, SearchContainer } from "./Map.styles";

export default function MapScreen() {
  return (
    <>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <Map />
    </>
  );
}
