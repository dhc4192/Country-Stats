import React from "react";
import { storiesOf } from "@storybook/react";
import Home from "./Home";

storiesOf("Home Button", module).add("PrimaryHomeButton", () => (
  <Home label="Home" type="Home" />
));
