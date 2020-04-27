import React from "react";
import { storiesOf } from "@storybook/react";
import SearchButton from "./SearchButton";


storiesOf("SearchButton", module)
  .add("SearchButton", () => (
    <SearchButton
      label="Search"
      type="Search"
    />))
  