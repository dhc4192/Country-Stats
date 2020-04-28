import React from "react";
import { storiesOf } from "@storybook/react";
import SearchButton from "./SearchButton";

storiesOf("Search Button", module).add("PrimarySearchButton", () => (
  <SearchButton label="Submit" type="Submit" />
));
