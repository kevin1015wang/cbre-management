import React, { useState, useEffect } from 'react';
import { styled } from "baseui";
import PropertyCard from '../components/propertyCard';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://rdqcypxlcvevkdosdolr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcWN5cHhsY3Zldmtkb3Nkb2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3OTIxOTksImV4cCI6MjA0NzM2ODE5OX0.Zdg2lcaTqMzQdEmJkbR4_t6WKkR_eH9RjRwzQ6KEOm0');

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
  height: "500px",
});

export default function PropertiesOverview() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const { data, error } = await supabase
        .from('Locations')
        .select('*'); 
      if (error) {
        console.error('Error fetching locations:', error);
      } else {
        console.log('Locations:', data);
        setLocations(data);
      }
    }

    fetchLocations();
  }, []);

  if (!apiKey) {
    console.error("API key is missing. Make sure it is defined in your .env file.");
    return <div>Error: Missing API key</div>;
  }

  return (
    <ContentWrapper style={{ maxWidth: "1300px", margin: "0 auto" }}>
      <LeftColumn>
        {locations.map((location) => (
          <PropertyCard key={location.id} {...location} />
        ))}
      </LeftColumn>

      <RightColumn>
        <APIProvider apiKey={apiKey}>
          <Map
            style={{ width: '100%', height: '100%' }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </APIProvider>
      </RightColumn>
    </ContentWrapper>
  );
}
