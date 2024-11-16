import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

export default function propertyCard() {
  return (
    <Card
      overrides={{ Root: { style: { width: "450px"} } }}
    >
      <StyledBody>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <img
            src="https://www.cbre.com/resources/fileassets/US-SMPL-79597/d1dd4775/b6e310c7-ca0f-4349-bab7-2a4490a47842_Photo_1_small.jpg"
            alt="Property"
            style={{ width: "125px", height: "125px", objectFit: "cover", borderRadius: "10px" }}
          />

          <div>
          <h1 style={{ margin: "0 0 5px 0" }}>Brake & Clutch Building</h1>
            Address: 3601 Main Street
            <br />
            Eco-Rating:
            <br />
            Electricity bill: $XX
            <br />
            Water bill: $XX
          </div>
        </div>
      </StyledBody>
    </Card>
  );
}
