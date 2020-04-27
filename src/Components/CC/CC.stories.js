import React from "react";
import { storiesOf } from "@storybook/react";
import CC from "./CC";

storiesOf("Converter Button", module).add("PrimaryConverterButton", () => (
  <CC label="Converter" type="Converter" />
));
