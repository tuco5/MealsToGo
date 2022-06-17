import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationsContext } from "../contexts/Locations.context";

import { SearchContainer } from "./Search.styles";

export default function Search() {
  const { keyword, onSearch } = useContext(LocationsContext);
  const [searchInput, setSearchInput] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search address"
        value={searchInput}
        onChangeText={setSearchInput}
        onIconPress={() => onSearch(searchInput)}
      />
    </SearchContainer>
  );
}
