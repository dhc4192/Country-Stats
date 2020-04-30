import React from "react";
import { storiesOf } from "@storybook/react";
import UpButton from "./UpButton";

storiesOf("Up Button", module).add("PrimaryUpButton", () => (
  <UpButton label="Up" type="Up" />
));
