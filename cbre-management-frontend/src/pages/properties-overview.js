import React, { useState, useEffect } from "react";
import { styled } from "baseui";
import { Button, SHAPE, SIZE } from "baseui/button";
import PropertyCard from "../components/propertyCard";
import ArrowLeft from "baseui/icon/arrow-left";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { createClient } from "@supabase/supabase-js";
import { Card, StyledBody } from "baseui/card";
import { Search } from "baseui/icon";
import { Input } from "baseui/input";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  padding: "16px",
  overflow: "hidden",
});

const LeftColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflowY: "auto",
});

const RightColumn = styled("div", {
  flex: 1,
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  padding: "1px",
  height: "600px",
});

export default function PropertiesOverview() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [locations, setLocations] = useState([]);
  const [energy, setEnergy] = useState([]);
  const [mergedData, setMergedData] = useState([]);
  const [water, setWater] = useState([]);
  const [currPage, setCurrPage] = useState("listProperties");
  const [improvementData, setImprovementData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedLocation, setSelectedLocation] = useState(null);
  const markersToDisplay = selectedLocation ? [selectedLocation] : locations;

  useEffect(() => {
    async function fetchData() {
      const { data: locationsData, error: locationsError } = await supabase
        .from("Locations")
        .select("*");
      if (locationsError) {
        console.error("Error fetching locations:", locationsError);
      } else {
        setLocations(locationsData);
      }

      const { data: energyData, error: energyError } = await supabase
        .from("energy_bills")
        .select("*");
      if (energyError) {
        console.error("Error fetching energy data:", energyError);
      } else {
        setEnergy(energyData);
      }

      const { data: waterData, error: waterError } = await supabase
        .from("water_bill")
        .select("*");
      if (waterError) {
        console.error("Error fetching water data:", waterError);
      } else {
        setWater(waterData);
      }

      const { data: improvementData, error: improvementError } = await supabase
        .from("improvements")
        .select("*");
      if (improvementError) {
        console.error("Error fetching improvement data:", improvementError);
      } else {
        setImprovementData(improvementData);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (locations.length && energy.length && water.length) {
      const combined = locations.map((location) => {
        const energyInfo = energy.find(
          (bill) => bill.location === location.name
        );
        return {
          ...location,
          monthlyBill: energyInfo ? energyInfo.monthlyBill : null,
          waterBill: water.find((bill) => bill.location_name === location.name)?.water_bill,
          improvementData: improvementData.find((improvement) => improvement.location === location.name),
        };
      });
      setMergedData(combined);
    }
  }, [locations, energy, water, improvementData]);

  if (!apiKey) {
    console.error(
      "API key is missing. Make sure it is defined in your .env file."
    );
    return <div>Error: Missing API key</div>;
  }

  const filteredData = mergedData.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ContentWrapper style={{ maxWidth: "1300px", margin: "0 auto" }}>
      <LeftColumn>
        <div>
          <Input
            startEnhancer={<Search size="18px" title="" />}
            placeholder="Search properties"
            size="compact"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {selectedLocation && (
          <Button
            shape={SHAPE.square}
            size={SIZE.compact}
            onClick={() => {
              setSelectedLocation(null);
              setCurrPage("listProperties");
            }}
          >
            <ArrowLeft size={24} />
          </Button>
        )}
        {currPage === "listProperties" ? (
          filteredData.map((data) => (
            <PropertyCard
              key={data.id}
              {...data}
              onClick={() => {
                setSelectedLocation((prev) =>
                  prev?.id === data.id ? null : data
                );
                setCurrPage("propDetails");
              }}
            />
          ))
        ) : (
          <></>
        )}
        {currPage === "propDetails" && selectedLocation && (
          <div>
            <PropertyCard
              key={selectedLocation.id}
              {...selectedLocation}
              onClick={() => {
                setSelectedLocation(null);
                setCurrPage("listProperties");
              }}
            />
            <div style={{ height: "16px" }}></div>
            <Card
              overrides={{ Root: { style: { width: "454px" } } }}
              title="Improvement Data"
            >
              <StyledBody>
                {selectedLocation.improvementData ? (
                  <>
                    <h3>Electricity Efficiency</h3>
                    <ul>
                      {selectedLocation.improvementData.electricity_efficiency.map(
                        (improvement, index) => (
                          <li key={index}>{improvement}</li>
                        )
                      )}
                    </ul>
                    <h3>Water Efficiency</h3>
                    <ul>
                      {selectedLocation.improvementData.water_efficiency.map(
                        (improvement, index) => (
                          <li key={index}>{improvement}</li>
                        )
                      )}
                    </ul>
                    <h3>Building Enhancements</h3>
                    <ul>
                      {selectedLocation.improvementData.building_enhancements.map(
                        (improvement, index) => (
                          <li key={index}>{improvement}</li>
                        )
                      )}
                    </ul>
                  </>
                ) : (
                  <p>No improvement data available.</p>
                )}
              </StyledBody>
            </Card>
          </div>
        )}
      </LeftColumn>
      <RightColumn>
        <APIProvider apiKey={apiKey}>
          <Map
            style={{ width: "100%", height: "100%" }}
            defaultCenter={{ lat: 32.7767, lng: -96.7970 }}
            defaultZoom={11}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            {markersToDisplay.map((location) => (
              <Marker
                key={location.id}
                position={{
                  lat: location.lattitude,
                  lng: location.longitude,
                }}
              />
            ))}
          </Map>
        </APIProvider>
      </RightColumn>
    </ContentWrapper>
  );
}
