import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";


storiesOf("Button", module)
  .add("Primary", () => (
    <Button
      label="Primary"
      type="primary"
    />))
  
  .add("Secondary", () =>
    <Button
    label="Secondary"
    type="secondary"
  />)

  