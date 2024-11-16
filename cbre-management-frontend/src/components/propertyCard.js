import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

export default function propertyCard() {
  return (
    <Card
      overrides={{ Root: { style: { width: "328px" } } }}
      title="Brake & Clutch Building"
    >
      <StyledBody>
      Address: 3601 Main Street
      <br />
      Eco-Rating:
      <br />
      Electricity bill: $XX
      <br />
      Water bill: $XX
      </StyledBody>
    </Card>
  );
}