import * as React from "react";
import { Card, StyledBody } from "baseui/card";

export default function PropertyCard({ name, address, ecoRating, monthlyBill, waterBill, image_url, onClick }) {
  return (
    <Card 
      overrides={{ Root: { style: { width: "450px", cursor: "pointer" } } }} 
      onClick={onClick}
    >
      <StyledBody>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <img
            src={image_url || "https://via.placeholder.com/125"} // Fallback image
            alt="Property"
            style={{ width: "125px", height: "125px", objectFit: "cover", borderRadius: "10px" }}
          />
          <div>
            <h1 style={{ margin: "0 0 5px 0" }}>{name}</h1>
            Address: {address}
            <br />
            Eco-Rating: {ecoRating}
            <br />
            Electricity bill: ${monthlyBill}
            <br />
            Water bill: ${waterBill}
          </div>
        </div>
      </StyledBody>
    </Card>
  );
}
