import React from "react";
import { storiesOf } from "@storybook/react";
import SearchBar from "./SearchBar";

storiesOf("Search Bar", module).add("PrimarySearchBar", () => (
  <SearchBar label="Search" type="Search" />
));
