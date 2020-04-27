import React from "react";
import { storiesOf } from "@storybook/react";
import ScrollBar from "./ScrollBar";

storiesOf("Scroll Bar", module).add("PrimaryScrollBar", () => (
  <ScrollBar label="Scroll" type="Scroll" />
));
