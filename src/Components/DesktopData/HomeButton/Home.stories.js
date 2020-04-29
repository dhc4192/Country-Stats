import React from "react";
import { storiesOf } from "@storybook/react";
import HomeButton from "./HomeButton";

storiesOf("Home Button", module).add("PrimaryHomeButton", () => (
  <HomeButton label="Home" type="Home" />
));
